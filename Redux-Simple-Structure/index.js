import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsub = store.subscribe(() => {
  console.log("Store Changed !", store.getState());
});

store.dispatch(bugAdded("new bug #1 testing Redux node v16.20"));

store.dispatch(bugAdded("new bug #2 testing Redux node v18.20"));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(2));

unsub();
