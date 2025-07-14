import React from 'react';

const hcflcmFormulas = [
  { label: 'HCF of two numbers', formula: 'Product of numbers / LCM' },
  { label: 'LCM of two numbers', formula: 'Product of numbers / HCF' },
  { label: 'HCF of fractions', formula: 'HCF of numerators / LCM of denominators' },
  { label: 'LCM of fractions', formula: 'LCM of numerators / HCF of denominators' },
];

const hcflcmShortcuts = [
  'For two numbers, HCF × LCM = Product of the numbers.',
  'If two numbers are coprime, their HCF is 1 and LCM is their product.',
  'To find HCF, use the Euclidean algorithm: keep replacing the larger number by the remainder until remainder is 0.',
  'To find LCM, list multiples or use prime factorization.',
];

const Hcmlcm = () => (
  <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow space-y-6">
    <h1 className="text-2xl font-bold text-center mb-4">HCF & LCM Formulas & Shortcuts</h1>
    <section>
      <h2 className="text-xl font-semibold mb-2">Key Formulas</h2>
      <ul className="space-y-2">
        {hcflcmFormulas.map((item, idx) => (
          <li key={idx} className="bg-blue-50 p-3 rounded flex flex-col sm:flex-row sm:items-center justify-between">
            <span className="font-medium">{item.label}:</span>
            <span className="ml-2 text-blue-700 font-mono">{item.formula}</span>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Shortcuts & Tips</h2>
      <ul className="list-disc pl-6 space-y-1">
        {hcflcmShortcuts.map((tip, idx) => (
          <li key={idx} className="text-gray-700">{tip}</li>
        ))}
      </ul>
    </section>
  </div>
);

export default Hcmlcm;
