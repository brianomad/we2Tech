const { blueprintFor, signatureOf, SHELLS, VARIANTS } = require('../src/components/demo/engine/logic.js');
const casesMod = require('../src/sections/case-data.js');
const { categoryForCaseId, defaultCategory } = require('../src/data/case-demo-content.js');

const CASES = Array.isArray(casesMod) ? casesMod : casesMod.default;

function categoryFor(item) {
  if (!item || item.id == null) return defaultCategory;
  return categoryForCaseId[item.id] || defaultCategory;
}

const unknownShells = [];
const byGroup = new Map();
const all = [];

for (const item of CASES) {
  const category = categoryFor(item);
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const bp = blueprintFor(item.id, category, tags);
  const sig = signatureOf(bp);
  all.push({ id: item.id, sig, bp });

  if (!SHELLS.includes(bp.shell)) unknownShells.push(item.id);

  const groupKey = `${category}|${[...tags].sort().join(',')}`;
  if (!byGroup.has(groupKey)) byGroup.set(groupKey, new Map());
  const m = byGroup.get(groupKey);
  if (!m.has(sig)) m.set(sig, []);
  m.get(sig).push(item.id);
}

const distinct = new Set(all.map((x) => x.sig)).size;
const worst = [...byGroup.values()]
  .map((m) => ({ dupes: [...m.values()].filter((v) => v.length > 1), max: Math.max(...[...m.values()].map((v) => v.length)) }))
  .reduce((a, b) => (b.max > a.max ? b : a), { dupes: [], max: 0 });

console.log(`Cases checked        : ${all.length}`);
console.log(`Categories in use    : ${new Set(all.map((x) => x.bp.category)).size}`);
console.log(`Shells available     : ${SHELLS.length} (${SHELLS.join(', ')})`);
console.log(`Variant engine tags  : ${Object.entries(VARIANTS).map(([k, v]) => `${k}=${v}`).join(', ')}`);
console.log(`Distinct blueprints  : ${distinct} / ${all.length}`);
console.log(`Worst same-category collision group : ${worst.max} cases sharing one signature`);
console.log(`Unknown shells       : ${unknownShells.length ? unknownShells.join(', ') : 'none'}`);

let flatDupes = 0;
for (const [groupKey, m] of byGroup) {
  for (const [sig, ids] of m) {
    if (ids.length > 1) {
      flatDupes += ids.length;
      const [a, ...rest] = ids;
      console.log(`  dup: ${groupKey} :: ${sig} -> ${a}${rest.length ? ',' + rest.join(',') : ''}`);
    }
  }
}
console.log(`Cases inside a colliding group: ${flatDupes}`);
