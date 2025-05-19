export function sortHealth(store) {
    store.sort((a, b) => b.health - a.health);
    return store;
}