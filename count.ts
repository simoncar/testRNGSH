import GlobalStore from 'react-native-global-state-hooks';

const countStore = new GlobalStore(0);

const nameStore = new GlobalStore("Initial Name", null, 'NAME_STORE');
const memberStore = new GlobalStore("Initial Color", null, 'MEMBER_STORE');


export const useCount = countStore.getHook();
export const useName = nameStore.getHook();
export const useMember = memberStore.getHook();