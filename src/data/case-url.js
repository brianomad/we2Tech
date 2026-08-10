import cases from '../sections/case-data';

export function caseSlugify(title = '') {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const slugByCaseId = {};
cases.forEach((c) => {
  slugByCaseId[c.id] = caseSlugify(c.title);
});

export function caseSlug(item) {
  if (!item) return '';
  if (item.slug) return item.slug;
  return slugByCaseId[item.id] || caseSlugify(item.title);
}

export function findCaseById(list, id) {
  return list.find((c) => String(c.id) === String(id));
}

export function findCaseBySlug(list, slug) {
  if (/^\d+$/.test(slug)) return findCaseById(list, slug);
  return list.find((c) => caseSlug(c) === slug);
}
