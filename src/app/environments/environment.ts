
export const environment = {
  production: false,
  tomtomKey: 'a4yfznzr0WueH8kQ27ASjNmRF1GbNfPt',
  showAppList: [],
  siteKey: '6LeDDgIaAAAAACnzwGav-mE96Why8xTjuSjv2mlr',
  wijmoKey: 'fcc.zignexlogistics.com|fcc.zignexlogestics.com|demo.zignexlogistics.com|www.zignexlogistics.com|localhost,531633231395724#B03MZEzM5IiOiQWSiwSfdtlOicGbmJCLiMjdxIDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnB5YKZFc6ImeuJnS9EzLtJDS4VWYGNzZ4R5ZvZkaPx6Qy94RXxEVZVFd5Jldw9UWvNzLHVXR5ZWQvgmWkdjSadDTr8mSh3iQlxkWmRWWXRjVtZGZzdGRzU4Y9pVO5FmaFt6M6I6ZwgTSJJmayZUR9IGNWRHaxR6VOF5K5p4RBVTY6hzYNRWW9ZTWXlme7k7SxhHN4kVRwEGbFREZEh5M6oVeadjaiplbDlnTB3mUYd6dz4kMypHRKNmUHNzNhplQ9EkS7R4ZoJlaFlmdTFVeHhEUNFFMnF5Lsh4V7lXexwUd6NHZNdFTWV5Q5kVS7cGWz56Q4t4M6QXZFlUdERGU6claUFTYX9EZWBFWrEza6M7VBpHStB5bwxmRxF4dWtCN6cUUPlDT8ZnYxMmTwt6aGFESxNjaQVWcFFXd72kUu3GVrYVYZNGdORDUVdVYYZVVUFjcZRHWiojITJCLiYjNElTOzQUMiojIIJCL8cTMzEDO5kzN0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLiMTN4AjMxASMzMDMyIDMyIiOiQncDJCLiQ7cvhGbhN6bsxSbvNmLzNWa4NXan3Gb8Vmbnlmeuc7d7xSbvNmLzNWa4NXan3Gb8Vmbnlmeu2WblRGLt36YuM7YpR7cld6bshXZudWa09yYjZGLt36YuM7YpR7cpd6bshXZudWa09yYjZmI0IyctRkIsIyYulEIsgXRudWaaJiOiEmTDJCLiQjM7UTOzEYMZM',
  rpApiUrl: "https://api.zignexlogistics.com/zexrp",
  apiUrl: 'https://api.zignexlogistics.com/zexbm/',
  geoServerUrl: 'https://geoserver.zignexlogistics.com/geoserver/zignex/wms',
  mapTileGeoserverUrl: 'https://geoserver.zignexlogistics.com/geoserver/wms',
  // appUrl: 'https://www.zignexlogistics.com/zexbm/',
  appUrl: 'localhost:4300/zexbm/',
  authenticationEnabled: true, isTomtom: true,
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://sso.zignexlogistics.com/auth/',
    // Realm
    realm: 'zx-sso',
    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'zignex-boundary-mgmt-ui-local',
  },
};

// export const environment = {
//   production: false,
//   tomtomKey: 'a4yfznzr0WueH8kQ27ASjNmRF1GbNfPt',
//   siteKey: '6LeDDgIaAAAAACnzwGav-mE96Why8xTjuSjv2mlr',
//   wijmoKey: 'fcc.zignexlogistics.com|fcc.zignexlogestics.com|demo.zignexlogistics.com|www.zignexlogistics.com|localhost,531633231395724#B03MZEzM5IiOiQWSiwSfdtlOicGbmJCLiMjdxIDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnB5YKZFc6ImeuJnS9EzLtJDS4VWYGNzZ4R5ZvZkaPx6Qy94RXxEVZVFd5Jldw9UWvNzLHVXR5ZWQvgmWkdjSadDTr8mSh3iQlxkWmRWWXRjVtZGZzdGRzU4Y9pVO5FmaFt6M6I6ZwgTSJJmayZUR9IGNWRHaxR6VOF5K5p4RBVTY6hzYNRWW9ZTWXlme7k7SxhHN4kVRwEGbFREZEh5M6oVeadjaiplbDlnTB3mUYd6dz4kMypHRKNmUHNzNhplQ9EkS7R4ZoJlaFlmdTFVeHhEUNFFMnF5Lsh4V7lXexwUd6NHZNdFTWV5Q5kVS7cGWz56Q4t4M6QXZFlUdERGU6claUFTYX9EZWBFWrEza6M7VBpHStB5bwxmRxF4dWtCN6cUUPlDT8ZnYxMmTwt6aGFESxNjaQVWcFFXd72kUu3GVrYVYZNGdORDUVdVYYZVVUFjcZRHWiojITJCLiYjNElTOzQUMiojIIJCL8cTMzEDO5kzN0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLiMTN4AjMxASMzMDMyIDMyIiOiQncDJCLiQ7cvhGbhN6bsxSbvNmLzNWa4NXan3Gb8Vmbnlmeuc7d7xSbvNmLzNWa4NXan3Gb8Vmbnlmeu2WblRGLt36YuM7YpR7cld6bshXZudWa09yYjZGLt36YuM7YpR7cpd6bshXZudWa09yYjZmI0IyctRkIsIyYulEIsgXRudWaaJiOiEmTDJCLiQjM7UTOzEYMZM',
//   rpApiUrl: "https://api.demo.zignexlogistics.com/zexrp",
//   apiUrl: 'https://api.demo.zignexlogistics.com/zextd/',
//   authenticationEnabled: true,
//   geoServerUrl: 'https://geoserver.demo.zignexlogistics.com/geoserver/zignex/wms',
//   mapTileGeoserverUrl: 'https://geoserver.demo.zignexlogistics.com/geoserver/wms',
//   appUrl: 'https://demo.zignexlogistics.com/zexbm/',
//   isTomtom:true,
//   keycloak: {
//     // Url of the Identity Provider
//     issuer: 'https://sso.demo.zignexlogistics.com/auth/',
//     // Realm
//     realm: 'zx-sso',
//     // The SPA's id.
//     // The SPA is registerd with this id at the auth-serverß
//     clientId: 'zignex-boundary-mgmt-ui',
//   },
// };
