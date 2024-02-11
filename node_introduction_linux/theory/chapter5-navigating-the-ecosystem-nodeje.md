# 1 - Matching Requirement Scope to Library Scope (1)

The need for an ecosystem package starts with a problem that needs to be solved. The first thing to determine when selecting a package to help solve a problem is the scope of the problem. 

Speaking extremely broadly, packages can be grouped into two categories: libraries and frameworks. These are the extremes at either end of a spectrum and there's a lot of gray area in-between. A library provides some tools to perform certain tasks, a framework provides patterns and opinions that act as constraints around (mostly) business logic.

Libraries themselves can also vary wildly in scope. Some libraries do one thing and do it well, others do a variety of related things and others should probably be split up into smaller libraries. The lodash library is a utility belt with a wide variety of data processing functionality. However, each part of its API is, conveniently, supplied as individual modules (see lodash.clonedeep as an example). If the problem at hand is purely a need to deeply clone an object, there's no need to use the entire lodash package. If however, it's decided that 50-75% of the lodash API will be needed for anticipated future problems, then using the entire lodash library probably makes sense.

What we're essentially advocating for is applying Occam's razor to package selection. This lodash case is a somewhat contrived example, and it can be argued that this is an unnecessary micro-optimization for Node.js. While counter-arguments can be made with regard to install, initialization and deploy times for Node, this is indisputable when it comes to web apps: payload size makes a difference. Regardless, what's more important than a single example is understanding how all these decisions in aggregate have an effect.

When people collaborate, mess and chaos is a natural by-product. Choosing packages that are too broad for a problem-area leads to overlap, which can lead to solving the same or similar problems in various conflicting ways. This results in the amplification of technical debt. Adopting a best practice of both using and creating singular-purpose modules helps to carve up the chaos into discrete pieces of manageable cognitive load.

---

# 2 -

---
