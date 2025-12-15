// Script to audit and fix all service mappings across the app
import fs from 'fs';

const serviceData = fs.readFileSync('src/pages/services/ServiceDetailPage.jsx', 'utf8');
const treatmentData = fs.readFileSync('src/pages/treatments/TreatmentDetailPage.jsx', 'utf8');
const appData = fs.readFileSync('src/App.jsx', 'utf8');

// Extract all service IDs from ServiceDetailPage.jsx
const serviceIdRegex = /^\s*"([^"]+)":\s*\{$/gm;
const serviceIds = [];
let match;
while ((match = serviceIdRegex.exec(serviceData)) !== null) {
  serviceIds.push(match[1]);
}

console.log('Found', serviceIds.length, 'service IDs:');
console.log(serviceIds.join(', '));

// Extract treatment mappings from TreatmentDetailPage.jsx
const treatmentMapRegex = /^\s*"([^"]+)"\s*:\s*"([^"]+)",?$/gm;
const treatmentMappings = {};
while ((match = treatmentMapRegex.exec(treatmentData)) !== null) {
  if (match[1] && match[2]) {
    treatmentMappings[match[1]] = match[2];
  }
}

console.log('\nFound', Object.keys(treatmentMappings).length, 'treatment mappings in TreatmentDetailPage.jsx');

// Extract quiz mappings from App.jsx
const quizMapRegex = /^\s*"([^"]+)"\s*:\s*"([^"]+)",?$/gm;
const quizMappings = {};
let quizMatch;
while ((quizMatch = quizMapRegex.exec(appData)) !== null) {
  if (quizMatch[1] && quizMatch[2]) {
    quizMappings[quizMatch[1]] = quizMatch[2];
  }
}

console.log('\nFound', Object.keys(quizMappings).length, 'quiz mappings in App.jsx');

// Check for inconsistencies
console.log('\n=== ISSUES FOUND ===');

const issues = [];

// Check if all treatment mappings point to valid service IDs
Object.entries(treatmentMappings).forEach(([treatmentName, serviceId]) => {
  if (!serviceIds.includes(serviceId)) {
    issues.push(`Treatment "${treatmentName}" maps to non-existent service "${serviceId}"`);
  }
});

// Check if quiz mappings point to valid services or categories
Object.entries(quizMappings).forEach(([quizName, link]) => {
  if (link.startsWith('/service/')) {
    const serviceId = link.replace('/service/', '');
    if (!serviceIds.includes(serviceId)) {
      issues.push(`Quiz "${quizName}" links to non-existent service "${serviceId}"`);
    }
  }
});

if (issues.length === 0) {
  console.log('✅ No mapping issues found!');
} else {
  console.log('❌ Found', issues.length, 'issues:');
  issues.forEach(issue => console.log('  -', issue));
}

console.log('\n=== SERVICE COVERAGE ===');

// Check which services are not mapped from treatments
const mappedServices = new Set(Object.values(treatmentMappings));
const unmappedServices = serviceIds.filter(id => !mappedServices.has(id));
console.log('Services not mapped from treatments:', unmappedServices.length);
if (unmappedServices.length > 0) {
  console.log(unmappedServices.join(', '));
}

// Check which quiz results don't have mappings
const quizTreatmentRegex = /treatments:\s*\[([\s\S]*?)\]/g;
const allQuizTreatments = new Set();
let quizSectionMatch;
while ((quizSectionMatch = quizTreatmentRegex.exec(appData)) !== null) {
  const treatmentsStr = quizSectionMatch[1];
  const treatmentRegex = /"([^"]+)"/g;
  let treatmentMatch;
  while ((treatmentMatch = treatmentRegex.exec(treatmentsStr)) !== null) {
    allQuizTreatments.add(treatmentMatch[1]);
  }
}

const unmappedQuizTreatments = Array.from(allQuizTreatments).filter(name => !quizMappings[name]);
console.log('Quiz treatments without mappings:', unmappedQuizTreatments.length);
if (unmappedQuizTreatments.length > 0) {
  console.log(unmappedQuizTreatments.join(', '));
}
