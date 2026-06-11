PATH: /case-studies/tps-workforce-hub
META TITLE: TPS Workforce Hub: Six Connected Systems | pocho.tech
META DESC: Six connected systems run admissions and operations at TPS Workforce Hub — AI-scored interviews, stipend alerts, daily reports. Built by Erick Bonilla.

# TPS Workforce Hub

**Clean-tech workforce training — Boston.** The EdTech division of TPS Energy runs an 8-week, stipend-based training program for immigrants and minorities. 30–40 applicants per cohort; 12–16 accepted. Six systems in production, built as an embedded team member.

---

## The before

Every cohort starts with 30 to 40 applications and ends with 12 to 16 seats. Between those two numbers: intake forms, interviews, scoring, scheduling emails, stipend rules, and a team holding it together by hand.

There was no operational visibility. Nobody could see, in one place, where a candidate stood, which interviews had been evaluated, or who was at risk of losing stipend eligibility.

The stipend part carried the most weight. Eligibility data sat in SharePoint, invisible to the participant and coach who needed the warning.

---

## What I built

Six connected systems, running as one operation.

1. **Airtable ATS** — Intake forms feed one applicant pipeline, so every candidate has a single record and a visible stage from application to acceptance.
2. **AI interview evaluation** — A Read.ai transcript webhook matches the candidate, applies objective scoring, runs an AI qualitative evaluation with direct quotes from the interview, and delivers a structured brief to the human reviewers.
3. **Interview scheduling** — Scheduling emails go out automatically as candidates advance through the pipeline.
4. **Daily and executive reporting** — A 5pm report to the team every day, and a Monday executive summary for the CEO: week-over-week movement, demographics, bottleneck alerts.
5. **Stipend eligibility notifications** — SharePoint data flows through Power Automate into Supabase; every Sunday, at-risk participants and their coach get an alert.
6. **Real-time dashboards** — Live views of the pipeline and program operations.

The AI doesn't decide who gets in. It reads, scores, and prepares the brief — the human reviewers make the call.

---

## The numbers

**Zero → daily**
From zero operational visibility to fully automated daily reporting.

**30–40 → 12–16**
Applicants to accepted, every stage tracked.

**Sunday, every week**
At-risk stipend alerts to participant and coach, before the problem lands.

---

## What the CEO says

> "You have done such a great job that I can't remember how we were working before you."
> — CEO, TPS Energy

---

## The stack

Airtable, OpenAI, Read.ai, Supabase, SendGrid, Microsoft Power Automate, SharePoint, Gmail.

---

## How it started

A single build, then embedded work inside the team — one system became six as each bottleneck surfaced.

---

## If your program runs on forms, interviews, and deadlines

Sixty minutes: you walk me through how applicants or clients move through your operation, and I tell you what I'd automate first and what it would cost.

**[Book a discovery call →](https://calendly.com/erick-pocho/1hr-session)**

Or write to me directly: [erick.bonilla63@gmail.com](mailto:erick.bonilla63@gmail.com)

---

*pocho.tech is the AI automation studio of Erick Bonilla. He designs and builds custom AI-powered automations for small teams — event agencies, media companies, tourism organizations, and accounting firms — working embedded inside each client's tools and team.*