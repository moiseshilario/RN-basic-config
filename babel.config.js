module.exports = (api) => {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ];

  const env = {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathSuffix: 'src',
          },
        ],
      ],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'babel-plugin-root-import',
//       {
//         rootPathSuffix: 'src',
//       },
//     ],
//   ],
//   env: {
//     production: {
//       plugins: [
//         [
//           'babel-plugin-root-import',
//           {
//             rootPathSuffix: 'src',
//           },
//         ],
//       ],
//     },
//   },
// };
