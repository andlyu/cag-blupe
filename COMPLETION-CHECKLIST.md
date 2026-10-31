# Research integration completion checklist

Agents and humans: read this before integrating a paper or method. Copy this
template into the integration's documentation, fill in the evidence, and check
each box only after verification. All boxes must be checked before declaring the
integration complete. Before the final handoff, review and update every item with
evidence. Report checklist status, evidence links, unmet items and explicit
exceptions; leave unfinished requirements unchecked and do not describe the
integration as complete.

## Standing authorization for BluPe runs and public delivery

### Authorization granted by using this harness

The owner gives standing authorization to run on BluPe remote bot arms as part
of requested work through this harness. A requested research integration,
playground fix, verification or arm run invokes the covered workflow below;
no separate authorization for the run is required. A task requested under
user-adopted instructions that select this harness also counts: retain the task
request and the selecting instruction as the invocation evidence. Reading or discovering this file alone
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
- Creating and publishing the integration's public source repository, committing
  and pushing its source, and deploying or updating its publicly hosted website.
  Use the normal repository and hosting visibility controls to make both public;
  the intended audience is anyone on the internet. Publish the demo's approach
  and configuration, runs/results, live demos, recordings, replays/history,
  simulation outputs and supporting evidence. Keep credentials, access tokens
  and private contact details out of public source and demo materials.

These actions are part of the invoked workflow. Do not ask for separate
permission for covered identity submission, runs, movement, recording, public
hosting or source publication. Public delivery is an authorized requirement of
the integration request; it does not require another publication confirmation.
Reuse confirmed identity/defaults; ask only for missing or ambiguous identity
or scope outside this contract. Keep execution mode separate from human
identity. The grant covers the task's integration and existing queue/run
destinations and the integration's public hosting/source destinations. Keep
private email out of public materials and do not send it to unrelated recipients.
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
The integration request also authorizes its publicly hosted website and public
source repository; no separate run or publication confirmation is required.
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

The harness adds no authorization gate for covered BluPe arm runs or public
delivery. Enforced sandbox, managed-policy and tool permissions still apply;
use their normal approval mechanism with the existing owner authorization and
concrete action scope. If a platform restriction blocks work, report its exact
action and reason, keep unverified acceptance items unchecked, and continue
unaffected work. Attribute that restriction to the platform rather than this
harness; do not ask the user to grant the same covered permission again.

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
- [x] The website is intuitive: a new visitor, without coaching, can find how to
  run the method. Record the visitor path and starting conditions; site entry
  has no separate 15-second pass/fail deadline.
- [ ] **Mandatory for every run:** first observed actual method-driven physical
  YAM motion occurs both within **15 seconds after the startup move to Home
  completes** and within **30 seconds after the Run/Start click excluding
  evidenced queue-admission waiting**, using the boundaries below (including a
  documented readiness timestamp when Home is unnecessary). Homing/preparation
  motion does not count. Record full elapsed times, queue entry/admission,
  excluded queue seconds and the queue-adjusted Run time for every run; a sampled
  demonstration is insufficient. Apply only the documented GPU-launch or
  research-grounded exceptions below.
- [ ] Every meaningful wait after a website action is immediately explained in
  a persistent inline status/progress area at that action (below Run in the run
  panel for launches). Show the current stage, a plain-language reason and real
  stage completion, with honest failure/stall status and available recovery.
  Verify the detailed wait-stage behavior below.
- [ ] Before marking the integration complete or reporting it done, open the
  deployed website and perform a final end-to-end physical YAM run through its
  normal user interface. Verify every completion requirement against that
  deployment and record evidence; unmet or unverified requirements block
  completion.

## Verify the visitor path

Record initial navigation (`t_entry`), the visitor's starting state and test
conditions, including browser/session/network, identity entry or confirmation,
queue and robot readiness. Keep the website usable without coaching. Site entry
is contextual evidence, not a separate timed pass/fail gate.

Keep a timed screen recording showing the visitor's actions, the Run click,
startup Home completion (or no-Home readiness) and live physical arms beginning
the integrated method, linked to the matching run. Correlate recorded UI/physical
events with lifecycle logs on a common timeline; document any clock offset or
measurement uncertainty. Backend timing alone cannot verify physical onset.

## Verify every Run and startup Home

For every run, record these fixed boundaries:

- `t_run`: the actual Run/Start click. Retain all subsequent wall-clock time,
  including queue waiting, preparation, coding, model loading and inference.
  Exclude only evidenced queue-admission waiting from the 30-second calculation
  below; do not restart the clock at admission, acknowledgement, dispatch, GPU
  readiness or a later status change.
- `t_home`: completion of that run's startup move to Home, using matched
  settled/ready completion for all participating arms, corroborated by live
  footage. Starting/submitting Home or reporting it accepted is insufficient.
  If no Home movement is necessary, record why and use the earliest documented
  per-run robot-ready confirmation after Run and normal queue/lease admission,
  before method preparation/execution. If already admitted and robot-ready at
  Run, use `t_home = t_run` with that readiness evidence. Readiness here concerns
  the robot, not GPU/model/code availability. Do not choose an arbitrary later
  event, repeat Home, or delay the readiness timestamp to reset this clock.
- `t_motion`: first observed actual physical arm motion executing the integrated
  method. Home and other preparation/parking motion do not count. An accepted or
  queued request, submitted packet, UI "running" status, inference start or
  backend-only timestamp is insufficient.

### Queue-admission wait in the 30-second budget

Record `t_queue` when this run's request actually enters the normal robot queue
and `t_admit` when that same request is first admitted/granted its robot
session/lease. Match queue/request and session/lease identifiers to the run and
retain actual lifecycle evidence. An accepted/queued submission is not admission.
Time between Start and queue entry still counts. Post-admission hardware
preparation, readiness checks, Home, coding, model loading/inference and other
setup still count; they must not be relabeled queue waiting. Later preparation
status changes or reacquisition cannot move the initial admission boundary.

Let `Q_run` be the duration of the evidenced queue-admission wait interval
`[t_queue, t_admit]` overlapping `[t_run, t_motion]`. Clip any queue waiting that
began before Start to `t_run`. If already admitted or there is no queue wait,
record `Q_run = 0` with matching admission/no-queue evidence. For a queued
request, missing entry or admission evidence makes the adjusted Run measure
unverified; do not assume zero or infer admission from Home, method readiness
or eventual motion.

Ordinary runs must satisfy **both** `t_motion - t_home <= 15 seconds` and
`t_motion - t_run - Q_run <= 30 seconds`. The queue exclusion is a normal part of
the 30-second budget, not a GPU or research exception; a full wall time over
30 seconds may still be a normal pass when the evidenced queue-adjusted time
meets its target. It does not change or pause the 15-second post-Home measure.

Retain full Run-to-motion and post-Home-to-motion times, excluded queue seconds
and queue-adjusted Run seconds even for failures and exceptions. Record every
run below (add rows), with visual evidence of Run and physical onset plus
matched Home/readiness and queue-admission evidence. Mark each target as pass,
missed target, unverified or exception. A normal pass requires the queue-adjusted
Run time and full post-Home time within their limits. Missing visual evidence or
an unmatched Home/readiness boundary leaves the affected timing unverified.

### GPU-launch exception

A run genuinely requiring new GPU launch/provisioning (for example on RunPod)
may claim an exception only for the evidenced time that launch blocks progress.
Show the **entire launch period** in persistent inline UI: actual launch start,
ongoing launch reason/stage and actual GPU-ready completion, with matching
provider/instance/job lifecycle evidence. If launch starts before Run, retain its
full start/ready interval and show its ongoing state when the run panel opens.
Warm/already available GPUs do not qualify. Record why a new GPU was necessary.

Keep the original clocks and full elapsed times. Record `t_gpu_start`,
`t_gpu_ready`, the full launch duration, and the evidenced GPU-launch blocking
seconds overlapping each measured interval (`B_run` and `B_home`). Only blocking
time inside both the actual launch interval and the relevant Run/Home-to-motion
interval can be excused; do not deduct concurrent time spent on unrelated work.
For the Run clock, also record `O_run`, the duration shared by the evidenced
queue-wait and GPU-blocking intervals inside `[t_run, t_motion]`. Exclude their
union, `Q_run + B_run - O_run`, never the overlapping seconds twice. For a GPU
exception, require `t_motion - t_run - Q_run - B_run + O_run <= 30 seconds` and
`t_motion - t_home - B_home <= 15 seconds`. Label a queue-adjusted Run target miss
or full post-Home target miss excused by GPU launch as **exception**, not normal
pass. Queue exclusion alone remains normal budget accounting. Keep raw queue and
GPU intervals, overlap, full timings and both adjusted calculations separately.
If GPU readiness precedes Home completion, `B_home = 0`: the full 15-second post-Home target still
applies. If Home completes during launch, only its evidenced remaining launch
blocking time can be excused; do not silently restart either clock at GPU ready.
Missing lifecycle or persistent UI evidence leaves the exception unverified.

Only the evidenced initial queue-admission interval is excluded from the
30-second budget; coding, model loading, inference, post-admission preparation
and other infrastructure delays outside actual GPU provisioning remain counted.
A warm GPU, a generic "loading" message or a slow model call is not a launch
exception.
Unrelated delays remain missed targets if they exceed the remaining limits.

Other exceptions require a specific justification grounded in the integrated
paper/research, explaining why it applies to that run and which target it affects,
plus a supporting source citation/link and relevant section/page. Slow coding,
loading, setup, post-admission delay or infrastructure delay is not in itself a
paper/research-grounded exemption; there is no permanent coding exemption.
Queue-admission waiting uses the normal exclusion above, not this mechanism.

| Run reference | Run/Start click (`t_run`) | Queue entry / admission (`t_queue` / `t_admit`), matching lifecycle evidence; or evidenced no-wait | Excluded queue seconds (`Q_run`) | Startup Home settled completion / no-Home readiness (`t_home`) and evidence | First observed method motion (`t_motion`) / visual evidence | Full Run-to-motion seconds | Queue-adjusted Run seconds | Full post-Home-to-motion seconds | Run / post-Home outcomes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | | |

- Exception record (repeat for each affected run):
- Exception category (GPU launch or paper/research-grounded):
- Affected run reference and timing target(s):
- Specific reason and why it applies to this run:
- GPU-launch evidence (if applicable: provider, instance/job reference,
  `t_gpu_start`, `t_gpu_ready`, full launch seconds, lifecycle log/link and
  persistent inline UI evidence covering the entire launch period):
- GPU-launch blocking evidence (`B_run`, `B_home`), queue/GPU shared seconds
  (`O_run`), excluded union (`Q_run + B_run - O_run`), both adjusted calculations
  and separate outcome for each target:
- Supporting paper/research source (for other exceptions: citation/link and
  relevant section/page):

## Visible progress while waiting

Use a compact persistent inline status area directly below Run in the existing
run panel; keep other meaningful waits beside their initiating control. Show the
current stage and why it is taking time immediately, keep it readable throughout
the wait, and visibly mark completed stages as actual lifecycle state advances.
A transient toast alone or a generic spinner is insufficient.

While actually awaiting queue admission, show `Waiting for robot admission` (or
clear equivalent), with the real queue reason/state and entry timestamp. Retain
its completed admission/grant state and timestamp, then show actual hardware
preparation/Home/model stages separately. Keep queue and GPU launch stages
distinct when concurrent; do not leave the queue stage pending after admission
or label all startup as queue waiting. Retain matching per-run lifecycle evidence
for the queue exclusion; no invented queue positions, times or completion.

When a model requires a new GPU, show only the stages that actually exist:
`Starting GPU` / "We're launching a GPU on RunPod for this model" -> `GPU ready`
-> `Loading model` -> `Running`. GPU startup must be explicit from its actual
launch start and throughout the launch period (immediately after Run when Run
initiates it); visibly confirm actual GPU readiness before subsequent
loading/running and retain completed-stage confirmation with start/ready
timestamps tied to lifecycle evidence. Use the applicable provider/model wording.
On failure or a stalled stage, state the known condition honestly and show an
available recovery action, such as retry or cancel where supported. Do not invent
percentages, ETA or completion, or expose irrelevant infrastructure internals.
UI transparency alone grants no exemption; only the documented GPU-launch
blocking interval qualifies under the exception above, with neither clock reset.

## Final verification before completion

Open the deployed website and its associated source repository. Use the normal
visitor flow to join, run the integrated method on physical YAMs and watch the
actual arms live. Check the unchanged 15-second post-Home measure and the
30-second Run/Start-to-motion budget excluding evidenced queue-admission wait.
Keep fixed boundaries, full elapsed times, queue entry/admission/excluded seconds
and queue-adjusted time; verify any GPU-launch exception uses the queue/GPU
union without double subtraction. Check actual queue-to-admitted-to-preparation
inline stages; site entry remains context only. Check approach/runner identities,
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

- Public website: https://cag-molmoact-blupe.andlyu.chatgpt.site/
- Public source: https://github.com/andlyu/cag-blupe
- Actual method: MolmoAct2 + CAG-inspired guidance, experimental port; baseline also available. No task-success improvement established.
- Runtime and model revisions: dependency.lock.json.
- Identity: Andrew, human; assistant-operated normal-UI verification at his request. Private email confirmed through the normal queue flow, never included in this repository. Optional emailed video off.
- Scope: YAM1 both arms, guided strength0.15,60seconds, Put the black box into the bin. Existing queue, lease, readiness, motion limits, Stop and parking remain enabled.
- Simulation: not applicable; this integration executes the policy on physical YAM hardware only.
- Current validation:72focused Python tests and6subtests passed;346shared UI checks passed;4Site edge checks passed. These are local test results, not physical motion proof.
- Current physical timing verification: pending cold/warm normal-UI tests against the revised15s post-Home and30s Run targets. Native timestamps do not alone verify visual motion.
- Historical physical evidence: guided physical run ep_48f25716171945ed had12accepted/completed packets and165waypoint progress events; retained live-view and archived footage are available through the website. No box-placement success claim.
- Public-visibility exceptions: none.

Internal hosting details, private repository URLs, credentials, contact details, raw logs and local audit history are excluded from this public checklist.
