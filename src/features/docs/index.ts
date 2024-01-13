export { default as docsSlice } from './docsSlice';

// components
export { Doc } from './components/Doc';
export { DocsList } from './components/DocsList';
export { DocItem } from './components/DocItem';

// service
export { getCompanyDocs, createDoc, editDoc, deleteDoc } from './services';

// selectors & actions
export {
  selectIsLoading,
  selectError,
  selectDocs,
  selectCurrentDoc,
  setCurrentDoc,
  resetCurrentDoc,
} from './docsSlice';
