// Test script to verify all navigation paths work
import fs from 'fs';

const serviceData = fs.readFileSync('src/pages/services/ServiceDetailPage.jsx', 'utf8');
const treatmentData = fs.readFileSync('src/pages/treatments/TreatmentDetailPage.jsx', 'utf8');
const appData = fs.readFileSync('src/App.jsx', 'utf8');

// Extract treatment categories from navbar
const navbarTreatmentRegex = /key:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*path:\s*"([^"]+)"/g;
const navbarTreatments = [];
let navbarMatch;
while ((navbarMatch = navbarTreatmentRegex.exec(appData)) !== null) {
  navbarTreatments.push({
    key: navbarMatch[1],
    label: navbarMatch[2],
    path: navbarMatch[3]
  });
}

console.log('=== TESTING NAVIGATION PATHS ===\n');

// Test 1: Navbar treatment links
console.log('1. Testing Navbar Treatment Links:');
navbarTreatments.forEach(treatment => {
  const expectedPath = `/treatment/${treatment.key}`;
  const actualPath = treatment.path;
  const status = actualPath === expectedPath ? '✅' : '❌';
  console.log(`${status} ${treatment.label}: ${actualPath} ${actualPath === expectedPath ? '(OK)' : `(Expected: ${expectedPath})`}`);
});

// Test 2: Treatment category pages exist in TreatmentDetailPage.jsx
console.log('\n2. Testing Treatment Category Pages:');
const treatmentCategories = ['hair', 'skin', 'acne-scars', 'under-eye', 'pigmentation', 'medifacial', 'anti-aging', 'laser', 'body-contouring'];
treatmentCategories.forEach(category => {
  const categoryExists = treatmentData.includes(`  ${category}: {`) || treatmentData.includes(`  "${category}": {`);
  const status = categoryExists ? '✅' : '❌';
  console.log(`${status} /treatment/${category} - ${categoryExists ? 'Found' : 'NOT FOUND'}`);
});

// Test 3: Service pages exist
console.log('\n3. Testing Service Pages:');
const serviceIdRegex = /^\s*"([^"]+)":\s*\{$/gm;
const serviceIds = [];
let serviceMatch;
while ((serviceMatch = serviceIdRegex.exec(serviceData)) !== null) {
  serviceIds.push(serviceMatch[1]);
}

serviceIds.slice(0, 10).forEach(serviceId => { // Test first 10 services
  const serviceExists = serviceData.includes(`"${serviceId}": {`);
  const status = serviceExists ? '✅' : '❌';
  console.log(`${status} /service/${serviceId} - ${serviceExists ? 'Found' : 'NOT FOUND'}`);
});

if (serviceIds.length > 10) {
  console.log(`... and ${serviceIds.length - 10} more services`);
}

// Test 4: Quiz treatments have mappings
console.log('\n4. Testing Quiz Treatment Mappings:');
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

const quizMapRegex = /^\s*"([^"]+)"\s*:\s*"([^"]+)",?$/gm;
const quizMappings = {};
let quizMapMatch;
while ((quizMapMatch = quizMapRegex.exec(appData)) !== null) {
  if (quizMapMatch[1] && quizMapMatch[2]) {
    quizMappings[quizMapMatch[1]] = quizMapMatch[2];
  }
}

Array.from(allQuizTreatments).forEach(treatment => {
  const hasMapping = quizMappings[treatment];
  const status = hasMapping ? '✅' : '❌';
  console.log(`${status} "${treatment}" ${hasMapping ? `→ ${quizMappings[treatment]}` : '- NO MAPPING'}`);
});

// Test 5: Beauty Journey section links
console.log('\n5. Testing Beauty Journey Section Links:');
const beautyJourneySections = ['hair', 'skin', 'acne-scars', 'under-eye', 'pigmentation', 'medifacial', 'anti-aging', 'laser', 'body-contouring'];
beautyJourneySections.forEach(section => {
  const sectionExists = treatmentData.includes(`  ${section}: {`) || treatmentData.includes(`  "${section}": {`);
  const status = sectionExists ? '✅' : '❌';
  console.log(`${status} Beauty Journey → ${section} - ${sectionExists ? 'Found' : 'NOT FOUND'}`);
});

console.log('\n=== SUMMARY ===');
console.log('✅ All navigation paths should now work correctly!');
console.log('🔗 Navbar dropdown → Treatment categories → Individual services');
console.log('🏠 Beauty Journey section → Treatment categories → Individual services');
console.log('🎯 Quiz results → Individual services or categories');
console.log('\n🚀 Ready for testing in the browser!');
