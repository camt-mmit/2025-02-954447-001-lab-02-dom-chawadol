import { createComponent as createInputListComponent } from './input-list-component.js';

const sectionList = document.getElementById('app-section-list');
const sectionTemplate = document.getElementById('app-section-template');

function updateSectionStatus() {
  const sections = [...sectionList.querySelectorAll('.app-cmp-section')];

  sections.forEach((sec, index) => {
    sec.querySelector('.app-title-number').textContent = index + 1;

    const removeBtn = sec.querySelector('.app-cmd-remove-section');
    removeBtn.disabled = sections.length === 1;
  });
}

function createSection() {
  const sectionElem = sectionTemplate.content.cloneNode(true).firstElementChild;

  createInputListComponent(sectionElem);

  sectionElem.addEventListener('click', (ev) => {
    if (ev.target.closest('.app-cmd-remove-section')) {
      sectionElem.remove();
      updateSectionStatus();
    }
  });

  sectionList.append(sectionElem);

  updateSectionStatus();
}

document
  .querySelector('.app-cmd-add-section')
  .addEventListener('click', () => createSection());

createSection();
