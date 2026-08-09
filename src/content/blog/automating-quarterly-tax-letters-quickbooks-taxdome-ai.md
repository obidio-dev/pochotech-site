---
title: "Automating Quarterly Tax Letters with QuickBooks Online, TaxDome and AI"
description: "How I automated quarterly tax letters for a CPA firm using QuickBooks Online and TaxDome, with every AI draft reviewed before it goes out."
date: 2026-10-15
slug: automating-quarterly-tax-letters-quickbooks-taxdome-ai
lang: en
---

A CPA firm with around fifteen people sends hundreds of quarterly tax letters. Every one starts the same way: pull a client's numbers from QuickBooks Online, cross reference their filing status and documents in TaxDome, write a letter that explains what changed and what they owe or expect back, and get it out before the quarter closes. Multiply that by every client on the roster and the quarter stops being a technical problem. It becomes a staffing problem.

This is the exact process I automated for a CPA firm in the US, using QuickBooks Online and TaxDome as the two data sources and AI to generate the first draft of every letter. What follows is how the pipeline works, where the accountant stays in control, and a reporting mistake worth knowing about before anyone builds this for their own firm.

## The Manual Process, Before Automation

Before automation, a quarterly letter run looks like this: a staff accountant opens QuickBooks Online for a client, pulls the relevant figures, opens TaxDome to check the client's document status and any notes from prior communication, then writes a letter from a template, adjusting the numbers and the narrative by hand.

For one client this takes [N] minutes. For a firm with hundreds of clients, that is days of a trained accountant's time spent on data entry and formatting rather than on the judgment calls they are actually good at. The letters that suffer most are the ones near the end of the batch, written on a Friday afternoon by someone who has already written dozens of them that week.

## The Two Data Sources: QuickBooks Online and TaxDome

The automation pulls from exactly two systems, and that is on purpose, not because two was easier to build.

**QuickBooks Online** supplies the financial data: income, expenses, quarterly estimates, and any changes since the last letter. That is the number side of the letter.

**TaxDome** supplies the client and document side: filing status, outstanding document requests, and communication history. Which matters more than it sounds, because if the letter asks a client for a document they already sent, that is one of the fastest ways to lose their trust in the firm, and it is exactly the kind of small break that AI can quietly reintroduce if the data pull is not careful about it.

Two sources, not five. I could have wired in every tool the firm owns, and on a different project I probably would have, because more integrations look more impressive in a proposal. But every additional system is another place where the data can drift out of sync, so the build stays anchored to the two sources the firm actually uses for this process, not every tool the firm owns.

## How the Draft Pipeline Works

The pipeline runs in four steps, always in this order:

1. **Pull.** For each client due a letter this quarter, the system pulls current financial data from QuickBooks Online and status data from TaxDome.
2. **Draft.** An AI agent writes the letter using the firm's own template and tone, filled in with that client's real numbers and current status.
3. **Flag.** Anything unusual, a large swing from the prior quarter, a missing document, an inconsistency between the two data sources, gets flagged instead of quietly folded into the draft.
4. **Review.** Every draft goes to the accountant of record before anything is sent. Nothing reaches a client's inbox without a human reading it first.

Step two produces a draft, never a sent letter. That difference is the entire point of the system.

## Where the Accountant Stays in the Loop

The accountant still does three things a system should never do on its own: confirm the numbers are right, decide how to phrase anything sensitive, like a payment due that is larger than the client expects, and make the call on flagged items before they go out.

This is not a formality bolted on to make the automation look safe. It is the actual design principle: agents draft, a human approves the plan, and only then does anything leave the building. A firm that skips the review step to save time has not automated the letter process. It has just moved the risk from the drafting stage to the client's inbox.

## The Risk Nobody Talks About: Reporting What You Actually Did

Here is the part of this story that matters more than the pipeline itself. Partway through this engagement, I sent a progress report that overstated how much work had actually been completed. The client's reply was five words: no work has been done.

That was not literally true, work had been done, but I could not back the claim up with evidence at that exact moment, and the client called it out immediately. I nearly lost the account over a status email, not over the automation itself.

So I changed how I report, starting that day: only claim what can be shown as verified, with evidence attached, and follow any ambiguous status with a call instead of another email. The relationship recovered, and continued, but the lesson generalizes past this one project. In an automation engagement, the biggest risk is rarely the code. It is the gap between what gets reported as done and what is actually, verifiably done. Which means any firm evaluating an automation vendor should ask how that vendor reports progress, before asking how the automation works.

## Conservative Time Estimates

For a firm with several hundred quarterly letters, the manual process runs [N] minutes per letter. Multiply that by several hundred letters every quarter and that is not a rounding error, that is real accountant hours disappearing into data entry every three months. An automated draft pipeline turns the accountant's time per letter into a review pass, reading a mostly correct draft, checking the flagged items, and approving or editing, rather than building the letter from scratch.

Build timelines follow the same three month structure I use on other automation engagements: month one delivers the core pipeline, pull, draft, flag, against one quarter of real client data. Month two adds the review and approval workflow the firm actually wants to use day to day. Month three handles edge cases and hands off documentation, so the system does not depend on me, or on any one person at the firm, to keep running.

## Getting Started

The realistic first step is not connecting every tool the firm owns, and I say that knowing it is the version I would build if I let myself get excited about the tech instead of the problem. The real first step is smaller: pick one quarter, one client segment, and build the pull, draft, and flag pipeline against QuickBooks Online and TaxDome for that segment only. Expand to the rest of the client base once the first batch of letters has gone through a full review cycle and the accountant trusts what is landing in their inbox.

## Frequently Asked Questions

### Can AI write tax letters without an accountant reviewing them first?

No, and it should not. Every draft goes through the accountant of record before it reaches a client. The AI removes the data entry and formatting work. The accountant keeps the professional judgment and the final sign off.

### What data does the automation pull from QuickBooks Online and TaxDome?

From QuickBooks Online it pulls the client's financial figures for the quarter: income, expenses, and estimate changes. From TaxDome it pulls filing status, outstanding document requests, and communication history, so the letter never asks for something the client already submitted.

### How long does it take to build a quarterly letter automation?

A working pipeline for one client segment typically ships in the first month of a three month engagement. The remaining two months extend it to the full client base and add the review workflow the firm will use every quarter.

### How much time does this actually save a CPA firm?

The manual version runs [N] minutes per letter for a trained accountant. The automated version turns that into a review pass on a mostly finished draft, which is meaningfully faster across a batch of several hundred letters, though the exact time saved depends on how much editing each draft needs.

### What is the biggest risk in an automation project like this?

Not the code. The biggest risk is a gap between what gets reported as progress and what is actually verifiable at that moment. A vague or overstated status update can cost more client trust than any technical bug.

### Does this replace the accountant's role in client communication?

No. It removes the repetitive parts, pulling numbers and drafting a first version, so the accountant spends their time on judgment calls: sensitive phrasing, unusual figures, and the final decision to send.
