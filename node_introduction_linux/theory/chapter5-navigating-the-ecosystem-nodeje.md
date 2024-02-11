# 1 - Matching Requirement Scope to Library Scope (1)

The need for an ecosystem package starts with a problem that needs to be solved. The first thing to determine when selecting a package to help solve a problem is the scope of the problem. 

Speaking extremely broadly, packages can be grouped into two categories: libraries and frameworks. These are the extremes at either end of a spectrum and there's a lot of gray area in-between. A library provides some tools to perform certain tasks, a framework provides patterns and opinions that act as constraints around (mostly) business logic.

Libraries themselves can also vary wildly in scope. Some libraries do one thing and do it well, others do a variety of related things and others should probably be split up into smaller libraries. The lodash library is a utility belt with a wide variety of data processing functionality. However, each part of its API is, conveniently, supplied as individual modules (see lodash.clonedeep as an example). If the problem at hand is purely a need to deeply clone an object, there's no need to use the entire lodash package. If however, it's decided that 50-75% of the lodash API will be needed for anticipated future problems, then using the entire lodash library probably makes sense.

What we're essentially advocating for is applying Occam's razor to package selection. This lodash case is a somewhat contrived example, and it can be argued that this is an unnecessary micro-optimization for Node.js. While counter-arguments can be made with regard to install, initialization and deploy times for Node, this is indisputable when it comes to web apps: payload size makes a difference. Regardless, what's more important than a single example is understanding how all these decisions in aggregate have an effect.

When people collaborate, mess and chaos is a natural by-product. Choosing packages that are too broad for a problem-area leads to overlap, which can lead to solving the same or similar problems in various conflicting ways. This results in the amplification of technical debt. Adopting a best practice of both using and creating singular-purpose modules helps to carve up the chaos into discrete pieces of manageable cognitive load.

---

# 2 - Matching Requirement Scope to Library Scope (2)

It's important to define whether the problem being solved is a business problem or a computer-science problem. In the latter case carving the problem up into its smallest indivisible parts and either writing or consuming small-modules for each part is a highly recommended strategy for managing both the complexity of the problem and the vastness of the ecosystem. If it's a business problem (for instance, storing a checkout order) the logic for this should mostly live in the application layer. This is where a framework can be useful, but either generic libraries or framework ecosystem libraries (middleware, plugins, etc.) are still needed (for instance, for connecting to a database). These pieces that are used with frameworks should still be selected based on their scope in relation to the problem being solved. Frameworks with healthy ecosystems should be preferred, when it comes to implementing business logic.

Another important consideration is the circumstantial context in which a package is being selected. Is it a hobby project, or is it for an organization? In the latter case independently choosing a framework to solve a problem should be avoided. Frameworks come with opinion and structure and therefore a degree of standardization of approach. Framework selection should therefore be made on a project or, better, department or organizational level. Frameworks also come with their own extended ecosystems, where the same criteria for selecting packages applies to selecting middleware or plugins (or whatever the framework names packages that integrate with it).

As discussed in the introduction to this chapter, the relatively small core complimented by a large and diverse ecosystem has its trade-offs. The batteries are not included. Anecdotally, taking a step back and researching the options before writing any code pays off more often than not. Even if there is only a partial implementation for the problem we are trying to solve, we still have a reference or basis to work from.

In the following sections we will look at how to actually assess packages we are considering, ways to improve the speed at which we research and select packages, and understand the risks and rewards of the ecosystem utilization approach.

---

# 3 - Contextualizing Library Metrics (1)

There are a few readily available metrics when evaluating a module. On the npm registry the metrics we typically focus on are download count, dependents and version releases (from which we can determine release frequency). On GitHub the focus is generally on stars, issues and PRs.

There are some basic questions we need to ask when assessing a module, in order to interpret the package's metrics:

- Is the package a tool, library or framework?

- Is the problem area a moving-target or is it fairly static?

- Is the package solving one problem or multiple problems?

- Do release frequency metrics correlate with popularity metrics, if not, why?

GitHub stars tend to signal interest more than recommendation. If a module solves one problem very well, it's not likely to have more stars than a popular framework. This is because a framework tends to solve multiple problems, and so will register more interest with more people. The same goes for libraries that solve for multiple problem areas. Some open pull requests and issues are a sign of maintainer activity, lots and lots of PR's and issues are a sign of maintainer inactivity.

Download counts are, generally speaking, votes of confidence in a package. However they should not be taken as an absolute measure of value. It's important to understand the download count in context, comparing it to competing packages that fit the same problem area and thinking laterally about the package in terms of its other metrics and how it fits within the ecosystem.

Libraries are often used by other libraries; these are known as dependents. If a library has a large amount of dependents this can be a strong confidence signal and may also drive downloads.

If the package is a library or framework, download counts will be skewed by CI/CD pipelines. CI/CD pipelines are automated processes used to build, test and deploy parts of a system. Typically, dependencies are reinstalled from npm during these automated processes. These can run multiple times a day. If a large organization is using a module across many libraries, applications and services, this could contribute thousands of extra downloads of a package per day.

Conversely, if a package is a tool, the download count is more likely to correlate with actual user downloads. That's not to say tools may also be used in automated processes, it's just this is less likely. Therefore we should expect tools to have significantly lower download counts than libraries or frameworks.



---

# 4 - Contextualizing Library Metrics (2)

By way of demonstration, let's analyze a package on the NPM registry. We'll take a look at the rfdc module.

![image](https://github.com/eugenia1984/node/assets/72580574/e391f07d-701f-438e-90f3-fa08d4d0ef65)

Among the tabs above the description, we can see that there are 105 dependents, meaning there are 105 modules that depend on rfdc. In the right-hand column we can see there's been about 2.1 million downloads in the last week. The graph to the right shows weekly downloads over time, it can be seen steadily rising with a fairly recent dip. This dip happens every year for the download stats of every single module on npm: over Christmas a large number of the developers and companies who typically download modules from npm wind down. In the earlier days of Node, the inverse occurred, downloads spiked upwards over Christmas as enthusiasts had time to explore Node and the ecosystem.

Clicking the "Versions" tab will show the following screen:


![image](https://github.com/eugenia1984/node/assets/72580574/3eb38857-b5c2-4c81-b194-9f5fe4de082e)

---

# 5 - Assessing Package Quality (1)

These are the following areas we should look at when assessing a library, tool or framework:

- Code quality

- Test coverage

- Documentation

- CI integration

- Benchmarks

- Noise

- Security reports


Assessing code quality is difficult, especially if you're not yet an expert. Attempt to differentiate between personal opinions about how code should be written and whether the code is actually fit for purpose. The most important considerations when assessing code quality are:

- The exported interface

- Readability

- Internal structure

- Code complexity

The most important thing to a user of a module is the interface, is it straightforward to use or does it seem needlessly complex. If the latter, we need to be certain there's a good reason for such interface complexity. If there really isn't a reason for a complex API, then this signals that the package author may be prone to over-engineering which ultimately means a higher chance of bugs.

Readability should not be confused with familiarity. This is a difficult exercise but try to forget personal preference and get into the authors head. Is absolutely every line of code necessary? Are variables clearly named or do they look like algebra? If we had to take over or fork this package, can we see a way to maintain it according to its current style without re-writing it from scratch?

Internal structure is linked to readability, but this generally applies to how code is organized. If there's one 5000 LOC file that's not ideal. Clearly splitting code into smaller files that are easy to grasp in around 5 minutes is a sign of a considerate programmer.



---

# 6 -  Assessing Package Quality (2)

Finally, we need to determine how many logic paths there are through the code. This is highly context-dependent. A small module that does one thing well should definitely have far fewer logic paths than a framework. The EsLint tool can measure and enforce code complexity for our own projects and could be used as a way to check projects we may be assessing. Again, it is important to realize that this is highly context-dependent and this metric should be compared against other similar options.

There are always legitimate exceptions to any of these code quality rules. For instance, there used to be a case for using algebraic variables for performance reasons (not any more) because function size was determined by literal bytes in the function body and functions beyond a certain size used to exceed an optimization threshold. Always contextualize the evaluation of a module on its goals and constraints.

A package that lacks any tests should probably not be used in production. A package with 100% code coverage does not necessarily indicate 100% case coverage. However, between 80% and 100% code coverage at least provides some confidence in the robustness of a module. If there are two comparative packages being assessed and the only difference is one has more code coverage than the other, go for the package with the higher code coverage. Look at the PRs submitted to the package repository as well. Does the maintainer insist on tests with the PRs (or else do they add tests themselves before landing commits)? A healthy approach to testing signals an interest in quality from the maintainer.

For small modules and tools a comprehensive Readme markdown file is usually fine. Large libraries and frameworks that don't have extensive documentation, preferably on a separate website, should be treated with some caution. To make a blanket statement, documentation tends to be one of the hardest things for developers to write, they only do it if they care whether other developers will use what they have built. The grammar and spelling doesn't have to be perfect, but detailed coverage of the APIs, goals, choices and constraints should be present.

Each package should have its own CI setup, so that when a PR is made, the CI runs to check whether the change causes any test regressions or any other conventions have been broken (such as linting). If this is missing, then this is a signal that the author is not interested in updating the module - or if they are, they're not worried about publishing a broken release. This may just about be okay in cases where the package is a small module that solves a static problem but otherwise lack of CI could be problematic.


---

# 7 - Assessing Package Quality (3)

Not all packages have a focus on performance so supplying benchmarks is not absolutely necessary. Unless the package does claim to have performance goals. In those cases, benchmarks should be supplied and they should be easily reproducible.

Noise as used here, refers to the necessary versus unnecessary content in the package repo. Are there lots of files that don't seem to do all that much, that seem to be blindly copied from other projects? Is there a file that has one line of code, and all it does is export another file? Sometimes (not always) this can indicate a leaning towards cargo cult which betrays a lack of deeper understanding on the part of the programmer. It may be that the package is still of sufficient quality in these circumstances, however remember that consuming open source is a team sport. If there's two packages and the repository for one seems noisy while the other seems clean, opt for the cleaner repository because if there's ever a need to collaborate with the author on a PR, they're more likely to make good decisions due their (probable) deeper knowledge.

Packages can be looked up in the Snyk's vulnerabilities database. The npm registry also has a list of advisories. By default when a module is installed it is audited against npm's list of advisories, see "npm-audit" and "audit". A history of vulnerabilities does not necessarily indicate poor quality, often the contrary. It can mean adoption of a package has been extensive enough for battletesting to occur, and this has exposed bugs that could lead to vulnerabilities. Even active security issues shouldn't impinge on the quality assessment (as long as they're fairly recent).

It's also important to contextualize a security vulnerability. The reporting and tooling around ecosystem vulnerabilities currently lacks some nuance. If a package is a development experience tool but it either has or uses a module with a vulnerability that only applies to production contexts, then a warning will occur during an npm install. However, in this context, there is no vulnerability at all, since the code in question will never be exposed in a way that it can be exploited. Security is an involved subject, but when assessing the quality of a package be sure to understand any past or current security advisories in relation to actual use cases for the package and then decide whether this affects quality or not.

Always remember that nothing is perfect, open source is free and we are, in a sense, all maintainers.

Assessing a package for quality seems quite intensive. Anecdotally, it does become easier as intuition evolves from repetitive analysis. We can also work towards a shortcut for deciding which modules to use, which we'll discuss in the next section.

---

# 8 - Using Established Trust as a Heuristic

While the intensive practice of evaluating modules can become easier over time, once it's been undertaken a few times we may start to notice a pattern. We may begin to trend towards selecting packages by the same author.

If this happens, we become less rigorous in evaluating this particular author's packages, because we know from experience that the author is fairly consistent with their quality.

Even though this tends to happen organically (at least anecdotally this seems to be the case), recognizing that an author of a high quality package tends to also author other high quality packages allows us to consciously shortcut the intensity of assessing package quality. Like any heuristic, it's not a perfect approach and it's still important to check for obvious issues. However, by identifying authors and by extension, communities of authors who share the same values around quality, the process of package selection can become significantly less involved.

One particular community has found a way to take this heuristic a step further. The Fastify site's ecosystem page contains not only a list of framework plugins developed by the Fastify community but also a list of framework plugins that the Fastify community have vetted and now recommend.

When a community of open source maintainers consistently meets our quality standards, it becomes easy for our relationship with that community to transition seamlessly from consumer to collaborator. This is an important step when relying on ecosystem modules. If we can influence the packages we use and have the burden of maintenance shared across a community, not only do we have access to solutions for free, we also have the opportunity to evolve those solutions to our needs at much lower cost in comparison to proprietary solutions. In the next section we'll discuss the trade-offs of consuming ecosystem modules.

----

# 9 - Risks and Rewards

The Node.js ecosystem and the open source movement are intrinsically intertwined. Navigating the ecosystem means navigating open source communities.

Many packages in the open source space have been deployed into many production scenarios for some time, and have had bugs and vulnerabilities discovered and resolved as a result. Attempting to be productive with Node.js (which is itself an open source offering) without using any other open source ecosystem packages is a long hard road full of dragons.

For the most part, adopting Node.js means adopting open source software. The reward is fairly straightforward: we get to use software we didn't build, for free. This increases our velocity and helps us to get to market (or whatever our goal is) faster and cheaper.

The risk is that we have large dependency trees maintained by a lot of people, often in their spare time. If one of those authors decides not to maintain one or more of those modules any more, then we're using unmaintained, unsupported software. Furthermore, if we want a particular feature for a package that we use, and the author disagrees or agrees but does not wish to build it for any reason, personal or otherwise, that's entirely acceptable. Broadly speaking, the use of open source is a social contract, where software is given freely and consumers of that software get to make suggestions, but they certainly don't get to make demands.

The way we hedge this risk is two-fold. Firstly, champion strategies within organizations that we work for to sponsor authors we've identified as writing high quality packages so that those authors can spend more time maintaining those packages and less time hustling. Have a budget that can be used to offer payment to authors for desperately needed features. Payment for features and sponsorship may not always be practical for every OSS author because of international taxation complexity and accounting logistics.

Secondly, and more importantly, focus on nurturing both communication and technical abilities that enable collaboration with open source authors both in terms of adding functionality to their packages via PRs and/or forking in cases where they are no longer active.

While these approaches can be challenging for profit-centric organizations to grasp, these are important strategic considerations before adopting Node.js should be signed off. The bigger picture is, investing in the ecosystem to be as robust as possible and moreover investing in employed developers to help curate the ecosystem, still results in faster time to market at low cost while also yielding a higher level of control over the technology stack we use to build solutions.

---

This course is a taster for the sorts of things that can be achieved with Node.js. Hopefully it was interesting and inspires an appetite to learn and do more with Node.js. In this final chapter we'll conclude by discussing some ways to take Node.js further, both as a passion and professionally.

---
