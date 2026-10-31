# Completion Aware Guidance with MolmoAct2 on BluPe

[Open the website](https://cag-molmoact-blupe.andlyu.chatgpt.site/) to run MolmoAct2 baseline or MolmoAct2 + CAG-inspired guidance on the physical YAM1 arms. Confirm the editable name/email, select a task and Run. Guided mode and a 60-second run are the defaults. Stop, queue admission and native hardware limits remain in the existing BluPe controller.

**Physical execution and immediate replay work. Full harness completion remains open: 13 of 15 requirements are verified.** The strict site-entry and every-run timing requirements remain unchecked; the website and reviewed source are public. See the [complete checklist and historical evidence](COMPLETION-CHECKLIST.md).

The final cold-start test on October 31, 2026 UTC, as Andrew, completed 12 action packets and 165 waypoint progress events. Its actual live-camera replay was playable 57 ms after the browser observed completion, and remained playable after reload. A previous run's retained native recording also played. Box-placement success and improved completion from guidance have not been established.

## GPU availability and progress

RunPod endpoint `97wo1fy10wrd0e` is a persistent on-demand service with no trial expiry, zero minimum workers, one maximum worker and a 300-second idle timeout. Run starts the GPU when cold. The page immediately explains GPU startup below Run, confirms real readiness, then shows preparation and execution. Stop cancels startup before queue admission. No robot lease is acquired until inference is ready.

The final cold launch took 14.249 seconds to GPU readiness and 30.866 seconds from Run to first waypoint telemetry. This is a documented GPU-launch exception to the per-Run target, **not** a <=15-second result. Site entry to first waypoint telemetry was 32.038 seconds; the harness does not exempt that measure. Telemetry is not a substitute for first-visible-motion footage. All elapsed clocks and prior misses are retained in the checklist.

## Method and source

Both modes use the same pinned `allenai/MolmoAct2-BimanualYAM` checkpoint, BF16, seed 0 and ten flow steps. The guided variant ranks eligible task-text tokens by action-expert attention, selects the top quarter and scales their projected keys and values by `1 + alpha` across 36 layers. State, camera and non-task tokens are excluded. Strength zero delegates to pristine baseline attention exactly.

This is an experimental adaptation of CAG to MolmoAct2, not author code or an exact reproduction of the paper's DreamZero/Fast-WAM experiments. A changed prediction does not establish better task completion.

- [Shared implementation and deployment branch](https://github.com/andlyu/blupe-remote-bots/tree/codex/cag-molmoact-comparison/codex-runner/examples/cag_molmoact2)
- [Draft implementation PR](https://github.com/andlyu/blupe-remote-bots/pull/157)
- [Paper](https://arxiv.org/abs/2610.01559v2)
- [Shared harness](https://github.com/andlyu/blupe-remote-bots/blob/main/codex-runner/integration-harness/COMPLETION-CHECKLIST.md)

`dependency.lock.json` pins the shared runtime and checkpoint. This repository contains the Sites edge, ASGI loader, deployment templates and integration checklist. Shared UI, policy adapter, guidance and inference worker remain in the shared repository. The physically verified policy revision is `c437c970`; the subsequent display-only revision `6a005757` adds the frozen approach to history cards and replay titles.

## Replay and identity

The browser records the actual displayed observer video during its own run, then opens a viewing copy immediately on completion. It preserves stream delay and is labeled accordingly; this is not simulation or a robot-clock source recording. IndexedDB retains the copy locally with method, task and runner name, without email. Save video provides a download. Native source recordings and previous-run history remain available independently. Frozen or missing camera frames are not represented as successful recordings; storage failures leave an honest download recovery path.

Person-initiated runs retain the person's confirmed name. Assistant-operated verification is recorded separately from Andrew's identity. The private email is used only by the normal website/queue flow. Optional emailed run video was off during final verification.

## Deployment and validation

The website and this reviewed source are public at Andrew’s explicit request. Earlier automatic denials were resolved by his task-specific publication instruction; native Sites access is public, policy revision2. Credentials, private email, logs and recordings are excluded from this source checkout. The native Site source remains independently versioned; shared runtime and checkpoint pins below are identical.

The Sites Worker forwards only allowlisted runner cookies/CSRF headers through a server-keyed `/cag-site/` route. Sites account credentials are not forwarded. The dedicated `blupe-cag` Python service loads the exact locked shared checkout and uses private server-side credentials. Main playground and robot services are not restarted for CAG deployments.

Focused validation: 87 Python tests and 343 browser checks passed. The broader suite reported 1,464 passed, 28 skipped and 11 failures: ten known ASPIRE baseline failures plus a missing Node PATH in the test environment. The transport test passed when rerun with Node on PATH. This is not an all-green repository suite.

Historical failed trials, timing misses and superseded verification results are preserved in the checklist rather than presented as the current service state.


## Startup delay beyond the GPU

The final cold run spent14.249s launching theGPU, then16.382s before first waypoint telemetry. The main non-GPU interval was11.837s native admission/driver initialization/Home/first observation. Fresh feedback took0.828s, remaining camera capture1.670s, inference HTTP0.969s (GPU compute0.523s), and result-to-waypoint0.304s; queue admission afterGPU readiness added0.774s. Native drivers initialize sequentially and calibrate grippers on launch; a separate offline profile gives3.6s for zero-to-Home under current limits. This is not a claim that all non-GPU delay is acceptable or that strict15-second visible motion passes. No hardware safeguard was relaxed. Live video also has disclosed stream delay.

A separate later native Session API disconnect paused YAM1's automatic queue after the successful test. Normal parked/readiness restoration is tracked in the follow-up receipts; do not mistake aGPU-ready state for a robot-admission guarantee.
