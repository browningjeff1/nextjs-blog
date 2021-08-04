---
title: 'Top-down Action Role-playing Game'
built: 'Built using Unity Game Engine, C#'
link: ''
---

This is a top-down point and click action role-playing game made in the Unity Game Engine

Features this project includes:

- Click to move implemented via C# scripting taking advantage of Unity’s NavMeshAgent for pathfinding.

- Enemy A.I. also uses the NavMeshAgent for pathfinding and has an alert range to know if the player has entered a certain area and proceeds to attack them.

- Player has the ability to pick up different weapons found on the ground which have different modifiers to dictate how much damage is dealt to the A.I. Weapons are both melee and ranged.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.