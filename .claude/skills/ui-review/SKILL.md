
---
name: ui-review
description: Review React and Next.js user interfaces for usability, accessibility, functional correctness, responsive design, performance, and maintainability. Use when asked to review, audit, or assess UI components, pages, layouts, or user flows.
---

# User Interface Code Review

## Purpose

Perform a structured review of React and Next.js user interfaces. Identify concrete usability, functional, accessibility, performance, and maintainability issues and recommend fixes that fit the existing project architecture.

Prioritize issues that affect users, prevent task completion, expose incorrect information, or create significant maintenance problems.

The review should be evidence-based. Do not invent problems, recommend unnecessary rewrites, or treat personal design preferences as objective defects.

## Initial inspection

Before reviewing code:

1. Inspect the project structure and relevant project instructions, including README files, CLAUDE.md, and other applicable agent instructions.
2. Identify the framework and architecture in use, including the React version, Next.js version, App Router or Pages Router, and relevant rendering conventions.
3. Understand the component hierarchy, component responsibilities, and interactions between components.
4. Trace the flow of data through the UI, including props, local state, shared state, context, hooks, and API requests where relevant.
5. Identify the styling approach, component library, design system, and existing UI conventions.
6. Inspect relevant tests, package scripts, dependencies, and configuration.
7. Identify the application's main user journeys and the responsibilities of the pages under review.
8. Determine whether the review can include a running application, browser inspection, screenshots, or automated tests. Distinguish what can be verified from source code alone from what requires runtime inspection.
9. Do not assume that conventions, libraries, or architectural decisions from another project apply here.

Do not modify files during the review unless explicitly asked to implement fixes.

## Review procedure

### 1. User Experience and Usability

Evaluate whether users can understand the interface and complete their intended tasks efficiently.

- Check whether navigation, page hierarchy, labels, and actions are clear and consistent.
- Check that important actions are discoverable and visually distinguishable from secondary actions.
- Identify unnecessary steps, confusing interactions, inconsistent terminology, and avoidable friction.
- Check whether forms provide clear instructions, validation feedback, and understandable error messages.
- Verify that interactive elements communicate their state, including selected, disabled, expanded, loading, and completed states where applicable.
- Check that destructive or consequential actions have appropriate safeguards.
- Evaluate whether the interface provides feedback after user actions.
- Identify dead ends, ambiguous controls, and interactions whose outcomes are unclear.
- Check consistency across related pages and reusable components.

Distinguish objectively identifiable usability problems from subjective design preferences.

### 2. E-commerce User Journeys

Review the UI from the perspective of a customer using an e-shop.

Inspect the flows and features relevant to the pages under review:

- Product listings, product cards, product images, and product information.
- Product detail pages, including price, availability, variants, quantities, and product selection.
- Search, filtering, sorting, pagination, and category navigation.
- Shopping cart updates, item removal, quantity changes, and cart totals.
- Checkout steps, delivery details, payment selection, order review, and confirmation.
- Login, registration, account management, and guest checkout where supported.
- Validation and error handling for forms and customer inputs.
- Empty carts, no search results, unavailable products, loading states, and failed requests.
- Clear feedback when an item is added to a cart, a quantity changes, or an order is submitted.
- Consistency of prices, discounts, currency formatting, tax and shipping information wherever these are displayed.

Check whether the UI handles relevant edge cases, such as an unavailable product, an invalid quantity, a changed price, or an expired session.

Do not assume that a feature exists or is required without inspecting the project requirements and current implementation.

Treat payment processing, inventory enforcement, order totals, and other authoritative business rules as backend responsibilities. Review whether the UI represents their results correctly, but do not assume that client-side checks enforce business rules securely.

### 3. Functionality and Interaction Correctness

Inspect whether the interface behaves consistently with its intended functionality.

- Check event handlers, form submission, navigation, and state updates.
- Check whether buttons and interactive elements perform their advertised actions.
- Identify broken links, incorrect routes, missing handlers, and contradictory state.
- Check whether components update correctly when props, data, or user selections change.
- Inspect asynchronous operations, including loading indicators, success feedback, error handling, and duplicate submissions.
- Check for stale state, race conditions, and inconsistent UI after failed or repeated operations where relevant.
- Check whether validation messages appear at the appropriate time and disappear when the issue is resolved.
- Check whether browser navigation, refresh, and direct page access behave appropriately for the application's routing and state model.
- Check whether interactions remain functional when data is missing, delayed, or unavailable.

Do not report an interaction as broken solely because its implementation is not immediately visible in the first file inspected. Trace the relevant component, handler, hook, or service before drawing conclusions.

### 4. Responsive Design

Evaluate the interface across relevant viewport sizes and input methods.

- Check layouts at narrow mobile, tablet, laptop, and wider desktop widths where applicable.
- Identify horizontal overflow, clipped content, overlapping elements, and broken layouts.
- Check navigation menus, product grids, forms, dialogs, tables, and cart layouts at smaller widths.
- Verify that text, buttons, product information, and important actions remain accessible.
- Check that touch targets and spacing are appropriate for touch interaction.
- Identify fixed-width assumptions that prevent layouts from adapting.
- Check whether responsive images and media retain appropriate proportions.
- Ensure that important information or functionality is not unintentionally hidden on smaller screens.

When browser inspection is unavailable, inspect the responsive CSS and layout logic, but do not claim that the rendered interface has been visually verified.

### 5. Accessibility

Review the UI against relevant WCAG 2.2 Level AA criteria where applicable.

- Check semantic HTML and appropriate use of headings, landmarks, lists, buttons, and links.
- Check accessible names, labels, descriptions, and instructions for form controls.
- Check keyboard navigation and visible focus indicators.
- Check that functionality is not available only through a mouse or pointer.
- Check text and non-text contrast where it can be measured or reliably assessed.
- Check image alternative text, distinguishing informative images from decorative images.
- Check accessible feedback for validation errors, loading states, and dynamically updated content.
- Check dialogs, dropdowns, menus, and other interactive widgets for appropriate keyboard behavior and accessibility semantics.
- Check whether information is conveyed by more than color alone.
- Check focus management and status announcements in important interactive flows where relevant.

Prefer native semantic HTML and established accessible component patterns over unnecessary custom implementations.

Do not claim full WCAG conformance based on a source-code review alone. Identify the criteria examined and any testing that remains necessary.

### 6. React Architecture and Maintainability

Evaluate the implementation in the context of the existing codebase.

- Check whether components have clear, coherent responsibilities.
- Identify excessive component complexity, unnecessary duplication, and overly coupled UI logic.
- Check whether reusable components are used consistently and appropriately.
- Inspect prop interfaces, state ownership, and data flow.
- Identify unnecessary state duplication or derived state that can become inconsistent.
- Check effect dependencies, effect cleanup, and potential stale closures where applicable.
- Identify unstable list keys and unnecessary re-renders when they have a meaningful impact.
- Check error boundaries and component-level error handling where appropriate.
- Check whether shared UI logic belongs in a component, custom hook, or separate utility.
- Verify that TypeScript types, when used, accurately represent component props and data.
- Respect existing naming conventions, directory structure, and architectural decisions unless there is a clear reason to change them.

Do not introduce additional state-management libraries, abstraction layers, or design patterns merely because they are available.

Prefer the smallest change that adequately addresses the identified problem.

### 7. Next.js-Specific Review

Adapt this section to the Next.js version and router actually used by the project.

- Identify the App Router or Pages Router and follow the conventions appropriate to that architecture.
- For the App Router, check Server Component and Client Component boundaries.
- Verify that components using browser-only APIs, event handlers, or client-side React hooks are placed in an appropriate client context.
- Check whether unnecessary client boundaries increase the amount of JavaScript sent to the browser.
- Inspect data-fetching and rendering choices for correctness and suitability.
- Check for hydration mismatches and server/client rendering inconsistencies where relevant.
- Inspect loading, error, not-found, and navigation states using the routing conventions available in the project.
- Check route parameters, query parameters, and navigation behavior where relevant.
- Review image handling, font loading, and metadata conventions appropriate to the project.
- Check whether caching, revalidation, or client-side navigation can cause stale or incorrect UI data.
- Identify inappropriate use of browser APIs or environment-specific code during server rendering.
- Check whether sensitive data or server-only implementation details could be exposed through client-side code or props.

Do not assume that all components should be client-rendered or that all data should be fetched on the client. Recommend an approach based on the actual use case and the project's architecture.

### 8. Performance

Identify performance issues that materially affect the user experience.

- Inspect large client-side bundles and unnecessary JavaScript.
- Check image sizing, formats, responsive delivery, and loading behavior.
- Identify unnecessary client-side data fetching or repeated requests.
- Inspect expensive rendering operations and avoidable re-renders.
- Check whether large product lists require pagination, virtualization, or other suitable strategies.
- Check loading behavior for important content and interactive controls.
- Identify blocking resources, excessive dependencies, and expensive computations where relevant.
- Inspect lazy loading, code splitting, and dynamic imports when they provide a meaningful benefit.
- Consider Core Web Vitals, including LCP, INP, and CLS, when runtime measurements are available.

Distinguish measured performance problems from potential bottlenecks inferred from source code. Do not recommend memoization or other optimizations without a plausible benefit.

### 9. Security and Data Integrity at the UI Boundary

Review the UI for security-relevant implementation problems without treating the frontend as a trusted environment.

- Check how untrusted user input is displayed and whether unsafe HTML rendering is used.
- Inspect client-side exposure of secrets, credentials, and server-only configuration.
- Check how authentication state, session expiration, and unauthorized responses are represented in the UI.
- Check whether client-side assumptions could misrepresent prices, discounts, stock availability, or order status.
- Inspect form submission and API interaction for inappropriate disclosure of sensitive data.
- Check whether error messages reveal unnecessary internal details.
- Identify unsafe handling of URLs or user-controlled navigation targets where relevant.

Client-side validation improves usability but does not replace server-side validation, authorization, or business-rule enforcement.

Do not claim that the backend is secure merely because the frontend appears correct. Report backend concerns only when supported by the code or behavior actually inspected.

### 10. Styling and Design Consistency

Evaluate the consistency and maintainability of the visual implementation.

- Check typography, spacing, colors, sizing, and alignment against the project's existing design system.
- Identify inconsistent component styles and duplicated design values.
- Check hover, focus, active, disabled, and error states.
- Inspect the use of CSS modules, global styles, utility classes, or other styling conventions already adopted by the project.
- Check for conflicting styles, fragile selectors, and unintended style leakage.
- Identify unnecessary inline styles or repeated values when a shared token or component would improve maintainability.
- Check visual hierarchy, readability, and consistency across related pages.
- Ensure that responsive styling does not create conflicting behavior between viewport sizes.

Do not impose a new design system or replace the existing styling approach without a clear, evidence-based reason.

### 11. Testing and Verification

Inspect the available tests and verify findings to the extent permitted by the environment.

- Identify existing unit, component, integration, and end-to-end tests.
- Check whether important customer journeys are covered by appropriate tests.
- Identify missing cases for loading, error, empty, invalid-input, and successful states.
- Run relevant existing tests when permitted and practical.
- Use available linting, type checking, or build checks when relevant to the review.
- If browser automation or a running application is available, verify important interactions and responsive behavior.
- Report failed tests and distinguish existing failures from failures introduced by a proposed change, where that distinction can be established.
- Do not install dependencies, alter configuration, or change the environment simply to perform a review unless explicitly authorized.

Never claim that tests, builds, browser checks, or accessibility checks passed unless they were actually executed and the results were observed.

### 12. Optional Infrastructure and Docker Considerations

Inspect Docker-related configuration only when it exists or is relevant to the requested review.

If the project uses Docker or Docker Compose:

- Check whether the UI can be built and served using the documented container workflow.
- Inspect relevant build configuration, environment variables, and runtime assumptions.
- Check whether the application relies on files or environment variables unavailable inside the container.
- Identify configuration differences that could affect asset loading, routing, or UI behavior.
- Check that secrets are not embedded in client-side bundles or committed configuration.

Do not assume that Docker will be used. Do not recommend introducing Docker merely to improve the UI.

## Severity Classification

Assign each finding a severity based on its actual impact and likelihood.

- **Critical:** A severe issue that makes a core user journey unusable or creates an immediate, major security or data-integrity risk.
- **High:** A significant defect that blocks important functionality, substantially harms accessibility, or prevents many users from completing a key task.
- **Medium:** A meaningful usability, correctness, accessibility, performance, or maintainability issue with a more limited impact.
- **Low:** A minor defect or improvement with limited impact.
- **Informational:** An observation, trade-off, or optional improvement that is not necessarily a defect.

Do not inflate severity. Consider the affected users, the likelihood of occurrence, the business impact, and the availability of workarounds.

## Working Rules

- Begin with a review. Do not modify files unless explicitly asked to implement fixes.
- Inspect the actual implementation before making claims about defects.
- Follow the existing project architecture and instructions.
- Distinguish confirmed defects, likely risks, and optional improvements.
- Support findings with concrete evidence and relevant file paths, line numbers, or observed behavior.
- Avoid reporting the same underlying problem multiple times under different categories.
- Do not make broad architectural changes when a focused fix is sufficient.
- Do not assume access to a browser, external services, production systems, or deployment infrastructure.
- Do not expose credentials, personal information, or other sensitive data in the report.
- When information is insufficient, state the uncertainty and explain what additional inspection would resolve it.
- Prioritize actionable recommendations over generic best-practice statements.

## Output Format

Structure the review as follows.

### 1. Review Scope

Summarize the pages, components, user journeys, and technical areas inspected.

State any limitations, including whether the review was static or included runtime, browser, or automated testing.

### 2. Executive Summary

Summarize the overall condition of the UI, the most important risks, and the recommended priorities.

Avoid declaring the entire application healthy or secure based on a limited review.

### 3. Findings

Order findings by severity, from Critical to Informational.

For each finding, provide:

- **Title:** A concise description of the issue.
- **Severity:** Critical, High, Medium, Low, or Informational.
- **Category:** UX, Functionality, Accessibility, Responsive Design, React Architecture, Next.js, Performance, Security, Styling, or Testing.
- **Location:** Relevant file paths and line numbers where available.
- **Evidence:** The actual code or observed behavior supporting the finding.
- **Impact:** How the issue affects users, functionality, security, or maintainability.
- **Recommendation:** A specific, proportionate remediation.
- **Verification:** How to confirm that the issue has been resolved, where applicable.

Do not include a finding merely to populate a category. If no significant issue is identified in an area, say so when relevant to the review scope.

### 4. Missing Tests and Verification

List important tests or runtime checks that should be performed but were not completed.

Explain the reason for each outstanding check.

### 5. Prioritized Action Plan

Provide a concise, ordered list of recommended actions.

Prioritize functional blockers, serious accessibility problems, security or data-integrity risks, and major usability issues before minor visual refinements.

Separate necessary corrections from optional enhancements.

### 6. Overall Assessment

Summarize the principal strengths, remaining risks, and limitations of the review.

Clearly distinguish verified results from assumptions and recommendations.

Do not claim that the UI is fully accessible, secure, performant, or production-ready unless the scope and evidence justify that conclusion.
