interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// 需要NT的原因，也就是不能直接 T extends TreeNode ? 的原因：TreeNode extends TreeNode 让 compiler 持续 resolve （因为独立的每次确实可以 resolve）因而导致递归过深，而如果是 [T] extends [TreeNode] 且 T 为 TreeNode | null，则 compiler 需要知道 T 到底是 TreeNode 还是 null, 所以决定先 defer
type InorderTraversal<
  T extends TreeNode | null,
  NT extends TreeNode = NonNullable<T>,
> = T extends null
  ? []
  : [
      ...InorderTraversal<NT['left']>,
      NT['val'],
      ...InorderTraversal<NT['right']>,
    ]
