import {isNode} from "./isNode";

describe('isNode', () => {
  it('return true in node env', () => {
    expect(isNode).toBeTruthy();
  });
});
