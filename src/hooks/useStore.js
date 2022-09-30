import { useContext } from 'react';
import { StoreContext } from '~/store';

const useStore = () => useContext(StoreContext);

export default useStore;
