# MolmoAct2+CAG variant on BluPe

[Run the public demo](https://cag-molmoact-blupe.andlyu.chatgpt.site/) · [Public source](https://github.com/andlyu/cag-blupe) · [Completion checklist](COMPLETION-CHECKLIST.md)

Run MolmoAct2 baseline or **MolmoAct2+CAG variant** on the physical YAM1 arms. Confirm your editable name/email, enter a task and press Run. Guided strength0.15 and1minute are the defaults. Queue admission, native motion limits, Stop and normal parking remain enabled. The checkpoint identity is separately shown as allenai/MolmoAct2-BimanualYAM.

## Startup and timing

Run immediately explains GPU availability checking. A cold RunPod worker shows Starting GPU/loading MolmoAct2 throughout startup, then retains its real start/ready timestamps and elapsed time. Warm GPUs do not claim a launch exception. Robot admission, settled Home and first-action preparation have separate statuses. Native progress is not represented as visual motion proof.

The current targets are actual method motion within15 seconds after settled startup Home and30 seconds after Run, with evidenced queue admission waiting accounted separately. Full clocks remain visible in the audit. Only evidenced cold worker-launch blocking time supports a GPU exception. The service uses zero minimum workers, one maximum worker and a300second idle timeout, with no trial expiry.

Final normal-UI test as Andrew: **ep_41e88618ee2946de**, historical runtime1f691b4 (before the current parity fix). Visible method motion was confirmed by25.104s after Run and12.853s after Home including the conservative measured clock-offset bound. The run completed12real predictions,12accepted/completed packets and190waypoints, then stopped at its selected60second limit. Its immediate actual-camera replay was playable and retained with the exact model label. Both arms subsequently parked at zero with torque-off verified and no active lease.

A separate warm test met the timing targets. The cold test needed179.432s of RunPod worker startup, explicitly shown in the UI; it is a documented launch exception, not a normal full Run-time pass. Earlier cold/warm tests later stopped safely when a prediction exceeded joint limits. Those failures remain recorded. **Box-placement success and a task-success improvement from CAG are not established.** Those historical smoke-test timings are retained in the checklist. Changed model inputs/sampling reopen physical acceptance for the current revision; the integration is not declared complete.

## Method and source

Both modes use the same pinned checkpoint, BF16 and ten flow steps. Baseline and CAG0 now match the main BluPe playground's JPEG preprocessing, CUDA graphs, unseeded sampling and feedback refresh. Explicit seeds are used only for controlled equality checks. [Four real GPU parity cases pass, with14bit-exact baseline/zero calls](PARITY.md). The experimental guided port selects eligible task-text tokens by action-expert attention and scales their projected keys/values by1+alpha. State, camera and non-task tokens are excluded. Strength zero bypasses guidance preprocessing and intervention entirely. This is an adaptation, not author code or an exact reproduction of the paper's original model experiments.

- [Shared implementation](https://github.com/andlyu/blupe-remote-bots/tree/codex/cag-molmoact-comparison/codex-runner/examples/cag_molmoact2)
- [Implementation PR](https://github.com/andlyu/blupe-remote-bots/pull/157)
- [CAG paper](https://arxiv.org/abs/2610.01559v2)
- [Shared harness](https://github.com/andlyu/blupe-remote-bots/blob/main/codex-runner/integration-harness/COMPLETION-CHECKLIST.md)

The lockfile pins runtime/model source. This repository contains the Site edge, ASGI loader, deployment templates and audited checklist. No credentials, private email, private hosting URLs, raw logs or local audit history are included.

## Replay, identity and checks

The browser records its actual displayed live camera view and opens the viewing copy immediately after the run, preserving stream delay and pauses. IndexedDB retains it locally with model, task and runner, without email; Save video downloads it. Native recordings and previous-run history remain independently available. No simulation executes in this integration.

Person-initiated runs retain their confirmed human name. Assistant-operated verification is recorded separately from Andrew's identity. Email is submitted only through the normal website/queue flow; optional video email was off during these tests.

Current parity checks:68focused Python passes, one localhost HTTP check passed separately, and347UI passes. The full suite retained10known ASPIRE failures; an additional local HTTP timeout passed in the recheck. See [parity evidence and limitations](PARITY.md) and the checklist. Earlier physical runs are smoke tests, not verified object-placement success.
