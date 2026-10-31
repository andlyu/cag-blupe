# CAG=0 parity with the main BluPe MolmoAct2 path

Verified2026-10-31 as Andrew; assistant-operated fixed-public-input GPU tests. Runtime14b11898aaec9624835782c676a254f8c8d21549; checkpoint8dcbed66f2380e4393189c303ea72488eb9e63c2. No physical robot commands were submitted in this verification.

The reference is the deployed main playground's YAMRunpodAdapter and MolmoAct2 sampling configuration, rather than the CAG site's previous internal baseline. The deployed main adapter source SHA256 is f8ace0d34ab634b1aeed9e9021855dc90a64c19e36d1638494ee12133e64b30c.

## Differences found and corrected

- Main resizes RGB images to640x360 and re-encodes with Pillow's default JPEG settings; this site previously forwarded different JPEG bytes.
- Main uses CUDA-graph sampling and does not reset a request seed. This site previously disabled graphs and reset seed0. Live baseline/CAG0 now follow main's defaults; explicit seeds are retained only for controlled verification.
- Main refreshes measured feedback after inference before constructing the entry path. The CAG adapter now uses the same normal controller callback and validates YAM1 feedback.
- A separate zero-only bug mapped guidance tokens for the valid prompt “the task”: baseline returned200, CAG0 returned422. Zero now bypasses that preprocessing entirely; positive guidance retains validation.

An offline comparison imported the actual deployed main adapter and fed both adapters identical camera/state inputs and captured model actions. Before: core request bytes differed, feedback refresh was missing, and the gateway paths had52 versus49waypoints. After: core requests, feedback refresh and all52gateway waypoints match exactly. This formatter test uses captured actions; it does not independently prove a physical task result.

## Real GPU equality check

At fresh model startup, the unpatched original processor/CUDA-graph/global-RNG call path is executed with global RNG seed0 for the test only. Its output exactly equals the hooked baseline, guided strength0, and guided0 after a positive-guidance call. A failure prevents readiness. The health receipt reports all checks true.

Four fixed-input cases use the main adapter's exact preprocessed public checkpoint images and state. Each action matrix is30x14float32 values. All14baseline/zero calls are bit-for-bit equal within their case; all zero calls report zero guidance token mapping, zero intervention calls and zero KV change. Converted gateway packets also match. One positive0.15control changes outputs (maximum absolute delta0.109375); it uses eager sampling for its dynamic intervention, so that delta alone is not a causal estimate of CAG's effect.

| Case | Baseline/zero calls | Maximum absolute delta | Float32 SHA256 |
| --- | ---: | ---: | --- |
| documented_seed0 | 5 | 0 | fd4752528cc78ebfc3f8ed27637a7f7f914028eddd520681848acfcf7039d825 |
| documented_seed7 | 3 | 0 | b9bd7937e41c9983468b70f33513baa4d5c2ba75989cb35d07d3377866e609f6 |
| box_prompt_seed0 | 3 | 0 | db7f210ebef52ddc20077550d81f9f324e6d42478c62fe14438a0a5884141117 |
| ambiguous_prompt_seed0 | 3 | 0 | c6a55d49a9d2323d745702022efec9dbf2e13828860613a9557366e3247a1fa4 |

Two additional unseeded baseline/zero calls returned valid actions and receipts with seed=null and CUDA graphs enabled. Independent unseeded requests use different random samples; they are not expected to produce identical arrays. This test establishes controlled-noise zero equivalence and matching main input/output configuration. It does not claim a bit-exact comparison between two independently sampled remote workers.

GPU verification took46.809s wall, including27.323s readiness waiting. The narrow rollout took4.311s and preserved zero minimum/one maximum worker with a300second idle timeout. The dedicated CAG backend was updated; the main playground and robot services were unchanged.

## Software checks and limits

68focused Python checks passed1.18s. The localhost-token test initially lacked sandbox socket access and passed separately with its required socket in1.15s. All347UI checks passed759ms. Full Python suite:1478passed,11failed,28skipped,245subtests passed in127.94s;10failures are previously recorded ASPIRE failures, and the additional local HTTP test passed in the separate recheck. No repository-wide all-green claim.

Current physical timing, object-placement success and a final physical run of this revised sampling/input configuration have not been verified. Earlier physical smoke runs remain historical evidence. The current shared harness also adds command-contract and representative task-acceptance gates; these remain open for this deployment. This parity verification does not mark the overall integration complete.
