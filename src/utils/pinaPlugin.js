import { watch } from "vue"

function updateStorage(strategy, store) {
  const storage = strategy.storage || sessionStorage
  const storeKey = strategy.key || store.$id

  if (strategy.paths) {
    const partialState = strategy.paths.reduce((finalObj, key) => {
      finalObj[key] = store.$state[key]
      return finalObj
    }, {})

    storage.setItem(storeKey, JSON.stringify(partialState))
  } else {
    storage.setItem(storeKey, JSON.stringify(store.$state))
  }
}

export const piniaPluginPersist = ({ options, store }) => {
  if (options.persist?.enabled) {
    const defaultStrat = [
      {
        key: store.$id,
        storage: sessionStorage,
      },
    ]

    const strategies = options.persist.strategies?.length ? options.persist.strategies : defaultStrat

    strategies.forEach(strategy => {
      const storageKey = strategy.key || store.$id
      const storage = strategy.storage || sessionStorage
      const storageResult = storage.getItem(storageKey)
      if (storageResult) {
        store.$patch(JSON.parse(storageResult))
        updateStorage(strategy, store)
      }
    })

    watch(
      () => store.$state,
      () => {
        strategies.forEach(strategy => {
          updateStorage(strategy, store)
        })
      },
      { immediate: true, deep: true }
    )
  }
}
