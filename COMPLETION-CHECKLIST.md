# Research integration completion checklist

Agents and humans: read this before integrating a paper or method. Copy this
template into the integration's documentation, fill in the evidence, and check
each box only after verification. All boxes must be checked before declaring the
integration complete. Before the final handoff, review and update every item with
evidence. Report checklist status, evidence links, unmet items and explicit
exceptions; leave unfinished requirements unchecked and do not describe the
integration as complete.

## Standing authorization for physical playground tests

### Authorization granted by using this harness

The owner defines use of this harness as a task-scoped authorization grant.
When the user requests a research integration, playground fix or verification
through this harness, that invocation authorizes the agent to carry out the
covered workflow below. A task requested under user-adopted instructions that
select this harness also counts: retain the task request and the selecting
instruction as the invocation evidence. Reading or discovering this file alone
does not create user authorization.

For that requested task, using the harness authorizes:

- Joining the normal robot queue and submitting the runner's already-confirmed
  name and email to the task's integration website and its existing BluPe
  queue/run backend for queue admission, run attribution and normal run
  notifications.
- Starting the selected method on the task's physical robots/arms and performing
  bounded actual arm movement within the existing run limits.
- Capturing and retaining camera recordings, checking live footage and
  replay/history, and using Stop and normal parking/lease release.

These actions are part of the invoked workflow. Do not ask for separate
permission for each covered identity submission, run, movement or recording.
Reuse confirmed identity/defaults; ask only for missing or ambiguous identity
or scope outside this contract. Keep execution mode separate from human
identity. The grant covers the task's integration and existing queue/run
destinations, not unrelated recipients or publication of private email.
Do not invent a person's name or email. Preserve any explicit user limits or
revocation and copy this contract into the integration's checklist.

### Make the invocation and scope visible before approval review

At task start, read the target repository's `AGENTS.md` and its integration copy
of this checklist, even when the chat starts outside the repository. Repository
and global `AGENTS.md` entries should route the workflow to this contract; keep
the permission grant here rather than adding an independent global permission.
A checklist link alone does not load the instructions. Verify that changed
global discovery instructions have loaded into the chat; start a fresh session
if needed.

Before a physical test, give a brief progress notice citing the user's harness
invocation and this contract. Name the website and queue/run backend origins,
robot/station and arms, method/task, run duration, expected motion,
recording/replay destination and confirmed identity fields being submitted.
State that the invocation covers these scoped side effects. This is a notice,
not a new confirmation step; proceed without waiting for a reply.

For an action requiring tool approval, repeat the invocation, contract and
concrete scope in the escalation justification or the tool's supported approval
context. Include the user request/selecting instruction and the contract's source
path/heading or commit URL with the applicable wording; do not supply only a link.
The reviewer sees a compact transcript and the exact request, so do not rely on
hidden reasoning, an earlier chat, or an unread repository file. Fill this example
with the actual scope before the first approval request:

```text
User invocation: <task request; adopted instruction selecting the harness, if used>.
Harness contract: <source path/heading or commit URL and applicable wording>.
That invocation authorizes this task's queue entry and confirmed runner
name/email submission, bounded physical motion, and camera recording/replay.
Action: <UI control or supported API operation>; site <origin>;
queue/run backend <origin>; station/arms <IDs>; method/task <name>;
duration <seconds>; motion <bounded behavior>; recording/replay <destination>.
Identity: <confirmed fields submitted to those operational destinations>.
Execution mode: <mode>, separate from human identity.
Safeguards: existing queue/lease, readiness, validation, hardware limits, Stop
and normal parking/release remain enabled; no automatic timed-out-motion retry.
```

Use the normal playground UI or its supported run API with existing queue/lease,
readiness, command validation, hardware limits and Stop behavior intact. Keep
tests within the task's robots, method and existing run limits, respect other
users' active runs, and never automatically retry a timed-out movement. This
contract does not authorize unrelated robots or disabling safeguards.

Harness invocation does not override enforced sandbox, managed-policy or tool
permissions. Use the normal permission mechanism when required. If automatic
approval review explicitly denies an action, do not retry it through another
route. Report the exact denied action and stated reason, acknowledge the
invocation and contract already present, and leave physical verification
unverified. Continue independent work or a materially safer alternative;
otherwise request only the specific unblock. A documentation update alone does
not authorize retrying an already-denied action. Keep sandbox and reviewer
policy intact.

References: [Codex instruction discovery](https://learn.chatgpt.com/docs/agent-configuration/agents-md#how-codex-discovers-guidance)
and [Auto-review context and denials](https://learn.chatgpt.com/docs/sandboxing/auto-review).

## Completion requirements

- [x] A usable website exists, with an associated repository containing the
  website's source code. Record both links and the deployed source revision.
- [x] The website and its source repository are public, unless an explicit
  public-visibility exception for either is recorded below.
- [x] The website clearly names the actual approach/method being run. Use the
  executed method's name; Spotter is an example, not a shared hardcoded label.
- [x] When a human joins, collect or confirm their name and email. Prefill known
  identity/default values where available and let the runner edit both fields
  before joining.
- [x] Run context includes the actual approach and confirmed runner identity;
  the website makes clear which method is running and whose run it is.
- [x] Policy/model tests initiated by a person retain that actual user's
  confirmed name as runner. Use available identity and editable name/email
  defaults; require the real name to be provided/confirmed if missing before
  testing or running. Do not substitute `Anonymous`, `Autonomous` or `Automated`
  for that person. Record execution mode (such as `automated test`) and actual
  approach separately from human identity. Genuinely unattended/system activity
  has an explicit system identity; never fabricate a person's name or email.
- [x] A person can use the website to run the integrated paper's method on
  physical YAM robots/arms. Record a verified physical execution of that method.
- [x] The actual physical arms are visible live on the website while the method
  runs, so a visitor can see that it is executing on real hardware.
- [x] Immediately after a run finishes, the person can replay that just-completed
  physical YAM execution through the website, with retained footage showing the
  actual arms executing the integrated method.
- [x] The person can browse/select previous runs on the website and replay their
  retained physical arm footage, associated with the executed method and run.
  Mock animations do not satisfy either replay requirement.
- [x] If the integrated method executes anything in simulation, those executions
  are reviewable within the integration website and tied to the corresponding
  run. A reviewer can inspect what ran and its results using suitable
  replay/visualization and relevant outputs, as appropriate to the simulation.
  Clearly label simulation content to distinguish it from physical-arm footage.
  If nothing executes in simulation, record an explicit not-applicable
  explanation instead of claiming simulation review.
- [ ] The website is intuitive: a new visitor, without coaching, can find how to
  run the method and have the physical YAM arms actually executing it within
  **15 seconds of entering the website**, verified as described below.
- [ ] **Mandatory for every run:** after the person clicks Run, the physical YAM
  arms start actual method-driven motion within **15 seconds**, unless that run
  requires launching a GPU as documented below. Verify and record every run;
  a sampled demonstration is insufficient.
- [x] Every meaningful wait after a website action is immediately explained in
  a persistent inline status/progress area at that action (below Run in the run
  panel for launches). Show the current stage, a plain-language reason and real
  stage completion, with honest failure/stall status and available recovery.
  Verify the detailed wait-stage behavior below.
- [x] Before marking the integration complete or reporting it done, open the
  deployed website and perform a final end-to-end physical YAM run through its
  normal user interface. Verify every completion requirement against that
  deployment and record evidence; unmet or unverified requirements block
  completion.

## Verify the 15-second path

Time a visitor's full path. Start at initial navigation to the website (`t0`);
stop at the first observed physical arm motion executing the integrated method
(`t1`). Require `t1 - t0 <= 15 seconds`. Include page loading, finding the controls,
login/setup, queue/readiness waits and inference in the elapsed time; do not
restart the clock at Run. Queued, submitted, accepted or a UI "running" status
alone does not pass, nor does backend latency alone.

Include join-time name/email entry or confirmation in this same measurement.

Record the visitor's starting state and test conditions. Keep a timed screen
recording showing site entry, the visitor's actions and the live arms beginning
the method, linked to the matching physical run. If the elapsed time exceeds
15 seconds or physical motion is unverified, leave the box unchecked.

## Verify every Run click

This is an additional per-run measure; keep the site-entry test above. For every
run, start at the Run click (`t_run`) and stop at the first observed actual
method-driven physical arm motion (`t_motion`). Require
`t_motion - t_run <= 15 seconds`, subject to the GPU-launch exception below.
An acknowledgement, accepted request, queued status, submitted action or inference
starting is insufficient.

Record every run below (add rows), including visual evidence of the click and
motion. Mark the outcome as pass, missed target, unverified or exception.
Exceptions are not fulfilled <=15-second runs.

**GPU-launch exception:** a run that requires launching/provisioning a GPU (for
example on RunPod) may exceed this Run-click target. Record why the GPU had to be
launched and its startup evidence for that run. Keep the full elapsed time from
Run click to observed physical motion; do not reset the clock when the GPU becomes
ready. If GPU startup causes the target to be missed, label the outcome as an
exception. If the GPU is already available, the normal 15-second requirement
applies. This exception does not change the site-entry measure above.

Other exceptions require a specific justification grounded in the integrated
paper/research, explaining why it applies to that run, plus a supporting source
citation/link and relevant section/page. Outside the explicit GPU-launch case,
slow loading, queueing, setup or infrastructure delay is a missed target, not in
itself a paper/research-grounded exemption.

| Run reference | Run click (`t_run`) | First observed method-driven arm motion (`t_motion`) / visual evidence | Elapsed seconds | Outcome |
| --- | --- | --- | --- | --- |
| | | | | |

- Exception record (repeat for each affected run):
- Exception category (GPU launch or paper/research-grounded):
- Affected run reference:
- Specific reason and why it applies to this run:
- GPU-launch evidence (if applicable: provider, instance/job reference,
  launch/ready timestamps and startup log/link):
- Supporting paper/research source (for other exceptions: citation/link and
  relevant section/page):

## Visible progress while waiting

Use a compact persistent inline status area directly below Run in the existing
run panel; keep other meaningful waits beside their initiating control. Show the
current stage and why it is taking time immediately, keep it readable throughout
the wait, and visibly mark completed stages as actual lifecycle state advances.
A transient toast alone or a generic spinner is insufficient.

When a model requires a new GPU, show only the stages that actually exist:
`Starting GPU` / "We're launching a GPU on RunPod for this model" -> `GPU ready`
-> `Loading model` -> `Running`. GPU startup must be explicit immediately after
Run; visibly confirm actual GPU readiness before subsequent loading/running and
retain completed-stage confirmation. Use the applicable provider/model wording.
On failure or a stalled stage, state the known condition honestly and show an
available recovery action, such as retry or cancel where supported. Do not invent
percentages, ETA or completion, or expose irrelevant infrastructure internals.
This transparency requirement adds no timing exemption or clock reset.

## Final verification before completion

Open the deployed website and its associated source repository. Use the normal
visitor flow to join, run the integrated method on physical YAMs and watch the
actual arms live. Check both 15-second measures, approach/runner identities,
replay of the just-completed run and selection/replay of previous runs. Review
every checklist item against current evidence, including public visibility and
actual user attribution in policy/model tests, with execution mode separate.
Verify wait status appears immediately, keeps a readable reason, and visibly
confirms real stage completion (GPU ready before subsequent loading/running).
Check failure/stall status and available recovery evidence too. Record the
tested deployment, run and evidence below.
Leave unmet or unverified items unchecked and report gaps and explicit exceptions
before any completion claim.

## Integration and evidence

- Paper / method (link and version):
- Final verification (reviewer/date, tested website URL and deployed revision,
  physical run reference):
- Final checklist review (evidence for every item, replay links/timings, unmet
  items and explicit exceptions):
- Actual approach name / website label evidence:
- Human join evidence (name/email collection or confirmation, prefilled defaults
  and edits to both fields):
- Run context evidence (run ID, approach and runner identity; website attribution):
- User-initiated test evidence (run ID, confirmed human runner, actual approach,
  separate execution mode; editable defaults and missing-name confirmation):
- Unattended/system activity evidence (explicit system identity, execution mode
  and actual approach; no fabricated person):
- Wait-status evidence (action/run reference, immediate inline visibility,
  ongoing stage/reason and real completion transitions):
- GPU-startup UI evidence (startup shown after Run, actual readiness confirmed
  before loading/running, completed stages and matching lifecycle evidence):
- Failure/stall status and available recovery evidence:
- Website URL:
- Website source repository URL / deployed revision:
- Public-visibility exceptions (write "none", or the affected website/repository,
  explicit exception, reason and approval reference):
- Physical-test authorization/scope (standing owner authorization or task
  reference, website, station/arms, confirmed runner, method/task, duration,
  expected motion and recording; permission-review result if applicable):
- Physical execution (date, method/configuration, YAM station/arm IDs, run ID):
- Live physical arm footage (website location and evidence link):
- Just-completed replay URL / immediate availability evidence (same physical run):
- Previous-run browser URL / selected prior run and replay evidence:
- Simulation review (corresponding run reference, website review link, what ran
  and its results, suitable replay/visualization/outputs, clear simulation label;
  or explicit not-applicable explanation if nothing executes in simulation):
- 15-second test (tester/date, browser/session/network and robot readiness):
- Visitor's starting state and entry-to-motion steps:
- `t0` / `t1` / total elapsed seconds:
- Timed screen recording / matching physical run evidence:
- Remaining gaps:

## Current CAG verification scope — October 30, 2026

The canonical harness standing authorization above applies. The user requested the corrected 60-second CAG test onYAM1 as Andrew and directed that no repeated approval be requested. Normal tool/sandbox permissions were retained. The integration's older copy was refreshed before testing. No physical retry was blocked by automatic review in this task.

- Website:https://cag-molmoact-blupe.andlyu.chatgpt.site/
- Private managed source repository:https://git.chatgpt-team.site/b803c7eb-f9fe-4143-9576-861b80bf12d4/appgprj_6ae5216d4ce8819192e3a282a758831a.git. Exact final Site source commit and deployment are retained in the task's publication receipt.
- Shared implementation:https://github.com/andlyu/blupe-remote-bots/commit/333ae8b6e3a5dd0424cd82f9a18e5edda24b296f; draftPR157.
- Final verification:normal UI on shared 333ae8b6e3a5dd0424cd82f9a18e5edda24b296f, episode ep_10fcf7f68fab4f03, session sess_5c00a7a8cd5241d8. Actual person Andrew; editable private email confirmed. Execution mode:assistant-operated normal UI test at Andrew's request, separate from human identity and guided method mode. Optional email notification unchecked.
- Method:MolmoAct2+CAG-inspired guidance,strength 0.15,same pinned checkpoint/seed/ten flow steps. Task:Put the black box into the bin. Duration 60 seconds. Side effects:physical arm movement,camera recording,normal timed stop and parking. Native queue/lease,readiness,limits and Stop remained intact.
- Physical result:13 real model calls,13 accepted packets,12 completed packets,183 waypoint progress events. The final packet ended at the selected duration limit; it was not retried. The single policy_runtime_timeout event is the expected selected-duration ending. Both arms verified parked,DISABLED,torque-off. Box-placement success not established.
- Automatic ending:the UI switched from running to Andrew's replay dialog without anotherStop click. A live-stack-traced readiness cancellation mismatch was fixed and regression-tested; provider readiness honors its existing deadline. Authoritative terminal-state reconciliation changes no motion commands or hardware guards.
- Live footage and wait status:timestamped browser screenshot recording retained in outputs/cag-paced-test/final-browser-recording.mp4 with UTC frame manifest. GPU startup and GPU-ready confirmation appeared below Run, retained Andrew attribution while running, and the finishing/replay-preparation stages were explained. No invented ETA or percentage.
- Just-completed replay:https://cag-molmoact-blupe.andlyu.chatgpt.site/api/quick-replays/ep_10fcf7f68fab4f03/03d303b8384187d4ac374ef9b751887802674acbcdf264a7e9a9faa38d277fc1.mp4. Played inside the website. Recording ended1793417451.3174126; verified local preview ready1793417475.9227388,24.605 seconds later. The strict immediate-replay requirement remains unchecked. Quick preview is observer footage; improved/full recording remains pending.
- Previous run:the 8:24p.m.Pacific CAG run was selected from the website's history and played after final-run review. CAG runs now appear with local confirmed names/method metadata before remote archive catalog publication.
- Simulation:not applicable. No CAG policy rollout executed in simulation; protocol mocks and offline pacing regression fixtures are software checks, not simulated method executions.
- Latency:finalRun click2026-10-31T03:29:35.296Z; first waypoint progress1793417391.3750057,elapsed16.079s. This is telemetry, not a manually annotated first-visual-motion timestamp. The saved timestamped browser capture provides review evidence. The final warm run misses 15 seconds; the site-entry target also remains unchecked. The earlier cold-start run required RunPod startup and qualifies for the current per-run GPU-launch exception; it does not pass the site-entry target or count as a <=15-second run.
- Validation:80 focused tests pass in 1.75s;336 UI tests pass in 1.299s. Broad suite on 121a1ea has 1460 passes and 10 existing ASPIRE failures and 28 skips in 136.16s; final 2-line readiness cancellation change has its own passing regression in the80 focused checks. No all-tests-passed claim.
- Checklist status: 11/15 checked. Unmet:public visibility; immediate replay; site-entry 15 seconds; every Run 15 seconds. Website and source remain owner-private with no approved public-visibility exception. Integration is not declared fully complete.

## Historical verification evidence

## CAG / MolmoAct2 integration audit — October 30, 2026

Status: **INCOMPLETE**. All unchecked requirements above remain open. No public
visibility exception or research-based latency exception has been approved.

- Method: [Completion Aware Guidance v2](https://arxiv.org/abs/2610.01559v2),
  implemented here as `cag-inspired-molmoact2-v1`, an experimental MolmoAct2 port.
- Website: https://cag-molmoact-blupe.andlyu.chatgpt.site (owner-private;
  deployed and opened in the owner browser on October 30).
- Website source: private Sites repository, source commit recorded in the deployment receipt. Public companion repository https://github.com/andlyu/cag-blupe was created but contains no source: automatic approval review rejected the public push because the payload and destination lack explicit user authorization. Shared source is
  https://github.com/andlyu/blupe-remote-bots/tree/8a38795b8356f4001144aef738545ff85181ed7a .
- Human identity: shared launcher requires a confirmed name/email before queue
  creation; both browser fields remain editable and stored defaults are prefilled.
  Focused API tests pass. Deployed mode selection, strength enablement and editable identity form inspected. Known signed-in identity is supplied as editable defaults without forwarding account headers to the robot backend; edge test verifies this path. No human run submitted.
- Run context: public config and frozen run snapshot include actual approach,
  variant, mode, strength and named human/automated runner. Email remains private.
- Automated identity: focused test
  `test_confirmed_attribution_reaches_queue_and_run_context[identity1-expected1]`
  submits non-interactively as `Automated CAG test`, without an email. It uses a
  mocked queue; this is attribution evidence, not physical execution evidence.
- Final focused CAG/configuration/transport suite: 34 pass (0.55s); shared JavaScript: 331 pass; edge proxy: 4 pass. Full Python: 1448 passed, 11 failed, 28 skipped (127.48s). Ten ASPIRE runtime/cap failures remain; the missing WebSocket dependency was supplied in a temporary test path and the affected transport test passed. No all-tests-green claim.
- Historical GPU evidence: October 29 real RTX4090 documented-checkpoint smoke
  verified pristine/zero exact parity, nonzero text K/V change and non-task K/V
  invariance. These are prior measurements, not a current GPU readiness test.
- Current model service: the original one-hour endpoint is disabled. The website
  is deployed with runs paused; no paid worker is enabled by this task.
- Read-only YAM1 observation at 22:55 UTC: queue_ready false and a stale
  observed_at, despite measured grippers and safety.ok true. No robot lease or
  physical command was submitted.
- Physical run, live motion, immediate replay and prior CAG-run replay: unverified.
- Site entry → observed physical motion: not run / no timed visual evidence.
- Every Run click → observed physical motion: no physical runs; no latency pass
  claimed. Offline/mocked test calls do not establish these requirements.
- Final normal-interface end-to-end physical run: not run.
- Remaining work: enable a bounded GPU trial after spending authorization,
  verify real CUDA inference, verify station readiness, perform normal-interface
  physical CAG/baseline trials, retain timed screen/video evidence and replay,
  and review public visibility and every completion item against that deployment.


Final software/deployment review:
- Private Site successfully published by Sites; visible title names Completion
  Aware Guidance with MolmoAct2. Baseline/guided selection and strength controls
  inspected in the deployed normal browser UI.
- YAM1 is shown Offline; no current live-arm footage or physical CAG execution
  is claimed. The global BluPe previous-run browser is populated with other
  methods, which does not establish retained footage of a CAG run.
- CAG service runs independently on loopback8922. Only its scoped Caddy route
  and service changed; main playground process was not restarted. The edge
  forwards only runner headers and an authenticated origin key; private Sites
  account credentials never reach the Python backend.
- Backend/shared source revision: 8a38795b8356f4001144aef738545ff85181ed7a.
- Draft shared PR: https://github.com/andlyu/blupe-remote-bots/pull/157 .
- Current RTX4090 serverless catalogue price checked October30 23:07UTC:
  $1.34/GPU-hour; US-CA-2 availability LOW. Proposed next trial: one GPU,
  one hour maximum, automatic shutdown, existing prepared volume. No new paid
  capacity was started. Existing volume storage is separate from that GPU cost.
- Public visibility remains unmet. No explicit exception is recorded.
- Completion status: INCOMPLETE. No physical run, latency or replay exception
  is claimed. Mandatory final physical end-to-end verification remains open.

Checklist audit: 3/13 requirements checked (method label, human identity flow, automated identity). All other requirements remain unchecked; no completion claim or exception. The final verification is software/UI only because inference is paused and YAM1 is offline. Run setup was opened and closed without final submission.


### Authorized GPU startup — October30, 5:30p.m. Pacific

The user explicitly directed us to spin up MolmoAct GPUs. A fresh bounded
RunPod endpoint97wo1fy10wrd0e now runs oneRTX4090 inUS-CA-2, worker/pod
nxlb0iqdq5w25s, with min1/max1. This supersedes earlier paused-service status
for the duration of this trial. Shutdown is fixed at October30 6:27p.m.Pacific;
cap$1.50GPU, existing prepared volume, no new storage.

Fresh CUDA health verifies actual device and checkpoint, pristine/zero exact
parity, guided text conditioning changes and unchanged non-task K/V. External
same-input A/zero/B tests pass with0.412/0.402/0.514s inference. A real guided
request from the website runtime and credential path passes at0.532s inference.
Peak reserved12.650GB/free12.104GB. Four billing-guard tests pass; focused CAG
suite29pass. No physical commands or lease were issued.

YAM1's fresh observation00:30UTC reports hardware_not_initialized,
queue_readyfalse and null measured grippers. Model readiness does not satisfy
physical execution, live footage, CAG replay or either15-second requirement.
Checklist remains3/13 checked,10unchecked, no exceptions. Public companion
publication remains unapproved; no public upload was retried.


## Persistent availability repair — October30, 2026, 02:05UTC onward

Shared revision5849f9b3948d43b64f546dd437d2003e167b8ea4 is deployed on the dedicated
CAG backend. The existing Site audience is preserved. Endpoint97wo1fy10wrd0e is
now an explicitly authorized persistent on-demand service: workersmin0/max1,
idle300s, no trial deadline or per-worker lifetime. Completed trial records remain
unchanged. The website shows GPU startup elapsed time, queue waiting and robot
preparation separately. GPU readiness precedes robot queue admission; Stop cancels
preparation before a session is created. Delayed queue admission retains named
runner attribution.

Fresh evidence:24focused lifecycle/config/adapter tests pass;334sharedUI tests
pass. Full Python1452pass/10pre-existingASPIRE failures/28skip in145.13s. Actual
cold GPU startup57.923s with no robot session; guided inference from the real web
host0.5365s, totalhealth+act1.5389s. The external recording drive now passes the
exact controller admission check,551.6GiB free. The drive was restored outside
this chat. No recording guarantee is inferred from inference tests.

Browser verification: deployed entry shows RunPod available on demand, editable
model/task controls and all four live camera views. Earlier Anonymous/paused run
error clears on reload. The robot is independently busy on another non-CAG run;
no unrelated session was stopped or modified.

Physical verification remains UNVERIFIED. Automatic approval review rejected the
proposed60-second guided AutomatedCAGtest through the website API because it
would cause real arm motion and recording, while the website-fix request did not
explicitly authorize that specific physical execution. No request was submitted
and no workaround was attempted. One concrete physical run requires user
approval. The normal-UI final physical verification and replay requirements above
remain unchecked. Cold startup exceeds the15-second target; it is a missed target,
not a research-grounded exception. No all-requirements-complete claim.

Final shared source pin: `0e3ab755a703f02e82b44469e9ea0b9e4e774a70` (adds unavailable-service Run-control handling). A real GPU/in-memory-session check generated a guided prediction with no physical robot transport. This does not verify physical execution or replay.


## Final repair verification update

Current shared source: `de5f344946b4ed5b2367df3a88a2acaee28b3753`. The user explicitly authorized proceeding without further approval and confirmed the user name Andrew. Normal UI displayed Andrew with the private email prefilled and editable. The first guided physical run ep_36230c0154a04e1e completed12packets/120waypoints with12real CAG predictions and finalized649recording rows, no capture or writer errors. Its quick replay is published. The Andrew normal-UI attempt ep_ecb6ea483c654d57 was rejected before motion because a model-predicted adjacent joint step exceeded the native limit. The adapter now preserves all selected targets and inserts paced joint samples capped at0.03rad/100ms. Offline replay of that exact rejected packet produces27waypoints with maximum step1.6413degrees and speed0.2865rad/s, preserving the final target.30focused tests pass; the attribution/hosted suite66pass. No native motor, velocity, collision, workspace or admission limit was modified.

Completed-run labels now use frozen CAG configuration; proxied shared replay metadata is decorated with this website's durable confirmed runner and actual approach. Andrew and automated verification identities are retained separately. Automatic review rejected a further physical run after the pacing change, stating that explicit authorization for that retry was required. No bypass or repeated physical attempt was made. The final paced hardware run and immediate replay remain unverified; the integration is not declared fully complete. Cold startup remains outside the15-second target.


## All-checks candidate history (superseded by final audit below)

Invocation: user requested CAG/MolmoAct integration using the harness, then asked to make all checks pass, under adopted instructions selecting this harness. The authorization-by-use contract above covers confirmed Andrew name/email to this integration and its existing queue backend, bounded YAM1 motion and retained camera footage/replay; it does not authorize public email sharing.

Current candidate shared revision: `b929360dc021676b0ed509cf5b8436886dc6e5d3`. Default guided CAG,60seconds; visible editable identity fields and single validated Run action; actual observer-camera viewing copy saved locally during runs for immediate replay; durable shared public status attribution and neutral duration endings; read-only camera preparation overlaps existing feedback gates, and the exact RunPod HTTPS connection is reused.

User explicitly requires a cold start and allows the harness GPU-launch wait. Endpoint min0/max1, idle300seconds restored on2026-10-31T04:09:31UTC; always-warm setting reversed. No robot limit or admission guard changed. Cold start, first-motion timing and immediate physical replay still require fresh normal-UI verification of this candidate. Public access decision remains pending from the precise website/source question.


## Latest audit — October 31, 2026 UTC (October 30 Pacific)

**12/15 verified; integration is not fully complete.** This section supersedes the current-state claims in the historical sections above; failed runs and timing misses remain evidence.

- Physically verified policy/runtime: `c437c970387ad583090c9255228abffb7c54bf49`, native Site source `48bbc924b967d745d3f0d107cefd8ecf83f1b9bd`, successful deployment `appgdep_6ae56f3049388191a6cde13bb13c7677` at04:31:48.800448UTC.
- Display-only follow-up: shared `6a005757ec7fef4bb0ebe89ed7ca983d555cf632`; only history-card and replay-title approach labels changed. Dedicated CAG service active; main playground and robot services unchanged. A new physical run was not needed to validate these two display lines. Native Site source will pin the same revision.
- Final normal-UI cold test: `ep_48f25716171945ed`, session `sess_854f5e9793b94948`, Andrew (human, confirmed private email), assistant-operated verification recorded separately. YAM1 both arms; Put the black box into the bin; guided strength0.15; selected60seconds.12real model calls,12accepted/12completed packets,165waypoint progress events. Expected selected-duration stop; no model/run errors. Box-placement success and CAG improvement are not established.
- After this run: native queue empty, hardware modeDISABLED, queue_ready=true, no hardware fault or estop. Exact parked/torque-off boolean receipts were not separately verified; do not infer those flags from the disabled state.

### Checklist evidence audit

| Requirement | Evidence / outcome |
| --- | --- |
| Usable website and source | Existing Site plus private native source repository; exact runtime pin in dependency.lock.json. |
| Public website and companion source | **Unchecked.** Site owner-private, companion repository empty. Automatic approval review rejected public Site access, stating exact project/audience authorization missing. No bypass/retry and no companion source public push. No visibility exception adopted. |
| Actual method name | Guided controls, run context, retained history and replay title name MolmoAct2 + CAG-inspired guidance. Display-only follow-up verified in normal deployed UI. |
| Editable human name/email | Normal UI showed editable Andrew and confirmed email; Run performs existing validation. Private email omitted from source/evidence report. |
| Context / runner identity | Actual method and Andrew frozen into final episode; assistant execution mode separate. |
| Person-initiated policy tests | Final policy test attributed to Andrew, not Anonymous/Automated. Older incorrectly named historical run remains unchanged as evidence. |
| Physical method execution | Final run:12completed packets/165waypoints and actual camera footage. Not a claim of task success. |
| Live arms | Actual multicamera feed visible throughout normal-UI verification. Stream delay disclosed. |
| Immediate replay | **Verified now.** Browser observed terminal04:38:15.748UTC; clip ready04:38:15.762; actual video loadeddata/playable04:38:15.805,57ms after UI completion (about0.918s after native terminal). readyState4 and playing;60.875s downloaded viewing copy. |
| Previous replay | Selected prior episode ep_4eb9fd7178524aed; native preview played to2.8s,readyState4. UI clearly labels10x preview with idle pauses removed. Title includes Andrew and actual CAG approach. |
| Simulation | Not applicable: no simulation execution. Browser video shows real camera frames, not animation. |
| Site-entry <=15s | **Unchecked/missed.** Navigation t0=04:36:46.184UTC; first waypoint telemetry04:37:18.222362 (32.038s). First visible method motion is not precisely annotated; telemetry cannot pass this requirement. GPU exception explicitly excludes site entry. |
| Every-Run <=15s | **Unchecked.** Current cold run recorded as GPU-launch exception, not a <=15s pass. Historical warm16.079s miss and earlier unverified visual timestamps remain in ledger. |
| Inline wait explanations | Immediately below Run: real RunPod GPU startup, elapsed time, readiness before preparation/running; Stop available. Initial polling race repaired and final cold UI advanced normally. Failure/recovery cases also covered by focused UI checks and retained historical failure evidence. |
| Final normal-UI audit | Final real cold run plus immediate and previous replays verified; every requirement audited here and unmet requirements left unchecked. Display-only follow-up checked without submitting another run. |

### Final cold-start ledger and exception

| Run | Full Run clock | First waypoint telemetry (not visual substitute) | Outcome |
| --- | --- | --- | --- |
| ep_4eb9fd7178524aed / b929360 |04:21:04.023UTC|04:21:42.024735UTC (38.002s)|GPU cold; UI initialization/polling failure. Fixed in c437; failed UI result retained.|
| ep_48f25716171945ed / c437c970 |04:36:47.356UTC|04:37:18.222362UTC (30.866s)|GPU-launch exception. Actual footage retained; precise first-visible-method-motion timestamp unverified. Not a <=15s pass.|

RunPod97wo1fy10wrd0e required launch: min0/max1, idle300seconds; all known worker pods EXITED before the final Run. GPU requested04:36:47.592105UTC; ready04:37:01.840735UTC; actual startup14.248629seconds. No prewarming health/inference probe was used before Run. GPU ready to first waypoint16.381627seconds, so subtracting GPU startup alone does not establish a <=15s result. Full clocks retained. No paper-grounded exemption invented and no site-entry exception adopted.

### Replay, tests and retained local evidence

Immediate actual observer viewing copy saves to IndexedDB without email, survives reload and plays through normal website controls. Native source recordings remain independent. A frozen/missing camera is not called a successful clip; memory/storage recovery is described honestly. Download tool wall58.363seconds is a later file-download wait, not replay availability latency.

Local task artifacts (excluded from public source): outputs/cag-all-checks/verification.json, immediate-replay.mp4, immediate-replay.png, previous-replay.png, cold-start-screen-capture.mp4 and screen-capture-timestamps.json. The screen capture is a timestamped screenshot sequence with prior frames held across capture gaps, not continuous screen video. Original raw run log and screenshot manifest remain in private work evidence. No mock motion or visual first-motion timestamp was invented.

87focused Python tests passed1.13s;343browser checks passed0.599s. Broader run1464passed/11failed/28skipped/245subtests passed127.33s:10known ASPIRE baseline failures plus Node absent from the test PATH. The transport test passed after PATH correction; repository-wide all-green is not claimed.

Public access denial retained: “Changing the CAG site from owner-private to public is a persistent access change exposing the site to an unspecified audience, and the user has not explicitly authorized that exact audience and project scope.” Existing Site audience remains unchanged. User's harness invocation authorizes scoped identity/queue/motion/recording actions; it does not override this enforced denial. Public publication needs only the exact missing audience/project unblock, not repeated physical-test permission.


## Public launch and latency investigation — October30, 2026 Pacific

User explicitly requested public access, then clarified in reply to the exact publication/no-retry question: “That is wrong within the harness, make it public.” That task-specific instruction supersedes the harness restriction for this publication; normal managed permissions remained in force. The ordinary Sites access operation succeeded: projectappgprj_6ae5216d4ce8819192e3a282a758831a,public,access-policy revision2. Native get_site independently returnedpublic. Reviewed14-file companion source published tohttps://github.com/andlyu/cag-blupe at2f8a4a9e3adbf3463a7056640f0617312ebc1de3; shared pin6a005757 verified via normal GitHub fetch. Credentials, private email, logs and recordings excluded. Current visibility requirement now passes; prior denials remain historical evidence. Harness13/15 verified, two timing items remain unchecked.

The final cold run's30.866s Run→first waypoint includes0.236s click→GPU request,14.249s GPU startup,0.774s GPU-ready→joined,11.837s joined→first observation (native preparation),0.828s fresh feedback,1.670s remaining camera wait,0.969s inference HTTP and0.304s result→first waypoint. Actual GPU compute0.523s; HTTP overhead0.446s. Thus16.382s afterGPU readiness is not GPU launch time. Live-view stream delay (~4seconds in observed UI) additionally affects first-visible motion; it was not subtracted from any clock.

Production source inspection confirmed: AutoQueue polls once per second, initializes drivers, moves Home and only then authorizes Session API handoff. Left and right factories initialize sequentially, withcalibrate_grippers_on_launch=True. Offline calculation using the active Home target and unchanged native limits gives36waypoints/3.6s zero→Home motion, with0.03594s planning compute. This is a new offline profile, not an exact timing of the historical physical Home. Retained controller append logs lack timestamps for splitting that old11.837s interval more finely. No safety limit, calibration requirement or queue rule was altered to claim a pass.

One fresh read-only three-camera probe took4.119s; fresh source ages were0.095/1.079/0.323s. Camera delivery is variable; native on-demand publisher serializes transfers across roles. The historical final run's1.670s camera wait is retained separately. No GPU or robot command was sent by these probes.

At follow-up inspection, a separate Session API disconnect had left YAM1 holding/settled withAPI connected again but automatic queue paused. No policy failure was attributed toGPU. Normal harness parking/readiness restoration is recorded in the local follow-up receipt; no automatic timed-out movement retry. Source/runtime policy unchanged in this investigation.

Anonymous Python HTTP probe was rejected by Cloudflare error1010; it does not independently verify anonymous browser rendering. Native Sites access is confirmedpublic; browser UI is checked separately. Source publication uses only the explicitly approved14text/configuration files.
