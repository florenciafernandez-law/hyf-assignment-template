1. Three new things I learned from AI in this task

The preconnect links in lines 11–12: I learned that they tell the browser to connect early to external resources (like fonts), so the page loads faster.
The eyebrow class in line 21: it is a small title placed above the main heading. It is a styling element that makes the header more complete and eye-catching.
The script from line 45 onwards gives the "Surprise me with a color" button its functionality, and it works together with the CSS in line 89.

2. Where I had to tweak or correct Copilot's suggestions

In its first attempt, Copilot designed the interests section as three buttons with titles, but they had no functionality. I wrote a new prompt asking for the interests to work as clickable buttons that reveal a hidden list of items inside each one. Copilot then modified the code and created three dropdown buttons, each with its own list (commit 222e0d2).

3. Copilot as a code generator vs. as a learning partner

When I use Copilot only to generate code, I get a result quickly, but I don't necessarily understand it. If something breaks, I can't fix it without asking the AI again. When I use it as a learning partner, I ask it to explain what each part does and why it is there. For example, I asked about the eyebrow class and the preconnect links instead of just accepting them. I also review its suggestions critically: its first version of the interests section didn't do what I wanted, so I had to notice that and ask for something better. The difference is who is in control. As a generator, the AI decides and I copy. As a learning partner, I decide, and the AI helps me understand and improve my own work.

4. Three risks of relying too much on AI tools while learning at HackYourFuture

Human creativity can be limited or cut short, because it becomes easy to accept the AI's first idea instead of developing your own.
You can become completely dependent on AI to work, and not be able to write or fix code on your own.
Most importantly, if you don't learn the technical basics and let the AI build everything without supervision, you lose the ability to spot mistakes and errors in the code.
