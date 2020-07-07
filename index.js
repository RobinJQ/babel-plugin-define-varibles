export default function () {
  return {
    visitor: {
      Identifier(path, state) {
        if (path.node.name in state.opts) {
          path.node.name = state.opts[path.node.name];
        }
      },
    },
  };
}
