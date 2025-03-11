export const questions = [
  {
    id: 1,
    question: "What do you do when you get paid? (All questions' answers can up to 2!)",
    options: [
      {
        option: "Save and invest like a responsible adult.",
        score: { Owl: 3, Squirrel: 2, Fox: 1 },
      },
      {
        option: "Budget carefully and stash away for the future.",
        score: { Squirrel: 3, Penguin: 2, Capybara: 1 },
      },
      {
        option: "Pay for necessities, then save whatever’s left.",
        score: { Fox: 3, Capybara: 2, Penguin: 1 },
      },
      {
        option: "Immediately treat myself to a little something (but not too crazy).",
        score: { "Golden Retriever": 3, Raccoon: 2, Cheetah: 1 },
      },
      {
        option: "Blow it all. YOLO, baby.",
        score: { Cheetah: 3, "Golden Retriever": 2, Raccoon: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "How do you budget your expenses?",
    options: [
      {
        option: "I track every cent, color-code my spreadsheets.",
        score: { Squirrel: 3, Owl: 2, Penguin: 1 },
      },
      {
        option: "I have a rough budget and stick to it.",
        score: { Fox: 3, Capybara: 2, Owl: 1 },
      },
      {
        option: "I try, but sometimes I buy stuff impulsively.",
        score: { Raccoon: 3, "Golden Retriever": 2, Cheetah: 1 },
      },
      {
        option: "Budget? What budget?",
        score: { Cheetah: 3, "Golden Retriever": 2, Raccoon: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "Your friends invite you on an expensive trip, but you're kinda broke. What do you do?",
    options: [
      {
        option: "Politely say no and stick to my budget.",
        score: { Squirrel: 3, Penguin: 2, Owl: 1 },
      },
      {
        option: "Try to find a cheaper way to join.",
        score: { Fox: 3, Capybara: 2, Owl: 1 },
      },
      {
        option: "Go, but cut back on other things to afford it.",
        score: { Raccoon: 3, Capybara: 2, Fox: 1 },
      },
      {
        option: "Borrow money, max out my card, and worry later.",
        score: { Cheetah: 3, "Golden Retriever": 2, Raccoon: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "What’s your relationship with credit cards?",
    options: [
      {
        option: "I pay them off in full every month like a boss.",
        score: { Owl: 3, Squirrel: 2, Fox: 1 },
      },
      {
        option: "I use them responsibly, but sometimes carry a balance.",
        score: { Fox: 3, Capybara: 2, Owl: 1 },
      },
      {
        option: "I use them often, and I struggle with payments.",
        score: { Raccoon: 3, Penguin: 2, "Golden Retriever": 1 },
      },
      {
        option: "I max them out and don’t think about it.",
        score: { Cheetah: 3, Raccoon: 2, "Golden Retriever": 1 },
      },
      {
        option: "I don’t even have one.",
        score: { Capybara: 3, Cheetah: 2, "Golden Retriever": 1 },
      },
    ],
  },
  {
    id: 5,
    question: "What’s your investing style?",
    options: [
      {
        option: "I actively research and invest regularly.",
        score: { Owl: 3, Fox: 2, Squirrel: 1 },
      },
      {
        option: "I invest but don’t obsess over it.",
        score: { Fox: 3, Capybara: 2, Owl: 1 },
      },
      {
        option: "I want to invest, but it’s confusing.",
        score: { Raccoon: 3, Penguin: 2, "Golden Retriever": 1 },
      },
      {
        option: "Investing is risky, I avoid it.",
        score: { Cheetah: 3, "Golden Retriever": 2, Capybara: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "You unexpectedly get $500. What do you do?",
    options: [
      {
        option: "Save or invest it immediately.",
        score: { Owl: 3, Squirrel: 2, Penguin: 1 },
      },
      {
        option: "Pay off some bills.",
        score: { Penguin: 3, Squirrel: 2, Fox: 1 },
      },
      {
        option: "Buy something useful (books, tech, school stuff).",
        score: { Fox: 3, Capybara: 2, Owl: 1 },
      },
      {
        option: "Save a little, but also splurge a bit.",
        score: { Raccoon: 3, "Golden Retriever": 2, Cheetah: 1 },
      },
      {
        option: "Spend it all, treat myself.",
        score: { Cheetah: 3, "Golden Retriever": 2, Raccoon: 1 },
      },
    ],
  },
  {
    id: 7,
    question: "What’s your biggest financial fear?",
    options: [
      {
        option: "Not having enough savings for emergencies.",
        score: { Squirrel: 3, Penguin: 2, Fox: 1 },
      },
      {
        option: "Struggling to pay for daily necessities.",
        score: { Raccoon: 3, "Golden Retriever": 2, Cheetah: 1 },
      },
      {
        option: "Being in debt forever.",
        score: { Penguin: 3, Squirrel: 2, Owl: 1 },
      },
      {
        option: "Missing out on fun because I have to save.",
        score: { Cheetah: 3, "Golden Retriever": 2, Raccoon: 1 },
      },
      {
        option: "Not knowing how to make my money grow.",
        score: { Owl: 3, Fox: 2, Capybara: 1 },
      },
    ],
  },
];

export const quizResultDescriptions = {
  Squirrel: {
    title: "🐿️ Squirrel – The Over-Prepared Budgeter 🐿️",
    intro:
      "If financial responsibility were a sport, you'd be the MVP. Squirrels stash away acorns obsessively, just like you meticulously budget and save for the future. You’re always three steps ahead, ensuring your bank account is padded for every possible scenario—because you never know when a financial \"winter\" will hit.",
    strengths: [
      "✅ Hyper-organized with finances—probably has a color-coded spreadsheet for tracking expenses.",
      "✅ Rarely caught off guard by unexpected costs.",
      "✅ Disciplined saver, great at sticking to financial goals.",
    ],
    weaknesses: [
      "❌ Overthinks every purchase—even small, guilt-free splurges.",
      "❌ Might hesitate to invest or spend money on experiences.",
      "❌ Can stress over finances even when there’s no reason to.",
    ],
    waysToImprove: [
      "🔹 Allow yourself to enjoy your money occasionally—your savings won’t collapse because you bought a latte.",
      "🔹 Diversify savings by investing, so your money grows rather than just sitting in a low-interest account.",
      "🔹 Set a fun budget so you can spend without guilt while staying financially responsible.",
    ],
  },
  Penguin: {
    title: "🐧 Penguin – The Debt Warrior 🏋️",
    intro:
      "Penguins are resilient, always pushing forward through harsh conditions—just like you with your debt repayment strategy. Your top priority is tackling loans, credit card balances, or student debt with laser focus. Every extra dollar goes toward getting rid of what you owe.",
    strengths: [
      "✅ Highly disciplined with money—stays on top of payments.",
      "✅ Likely has an airtight repayment plan and a solid understanding of credit scores.",
      "✅ Less likely to fall into financial traps or impulsive spending.",
    ],
    weaknesses: [
      "❌ So focused on paying off debt that they forget to save or enjoy life.",
      "❌ Might avoid investing due to fear of financial risk.",
      "❌ Can be overly cautious, missing opportunities to grow wealth.",
    ],
    waysToImprove: [
      "🔹 Balance debt repayment with building an emergency fund—don’t put every extra dollar into loans.",
      "🔹 Start small with investing while paying off debt, even if it’s just a few dollars a month.",
      "🔹 Allow yourself occasional guilt-free spending so life isn’t all about financial sacrifice.",
    ],
  },
  Owl: {
    title: "🦉 Owl – The Investment Guru 📈",
    intro:
      "Wise and strategic, the owl is always thinking long-term. You’ve been tracking the stock market since before it was cool, and you know that compound interest is your best friend. You focus on making money work for you rather than just working for money.",
    strengths: [
      "✅ Highly knowledgeable about investing and financial growth.",
      "✅ Prioritizes long-term wealth building over short-term spending.",
      "✅ Rarely makes impulsive financial decisions.",
    ],
    weaknesses: [
      "❌ Can be too cautious, overanalyzing opportunities and delaying action.",
      "❌ Might avoid spending on personal enjoyment, even when affordable.",
      "❌ Can overcomplicate simple financial decisions.",
    ],
    waysToImprove: [
      "🔹 Don’t let analysis paralysis stop you from taking action—sometimes, the best investment is simply starting.",
      "🔹 Allow yourself to spend on things that bring you happiness in the present.",
      "🔹 Educate others on investing—your knowledge could help friends and family grow their wealth too.",
    ],
  },
  Fox: {
    title: "🦊 Fox – The Balanced Planner 🧠",
    intro:
      "Clever and resourceful, the fox knows how to get the best deals while staying financially responsible. You have a balanced approach—saving and investing wisely, but also knowing when to treat yourself. You’re the type to stack discounts, use cashback apps, and maximize credit card rewards like a pro.",
    strengths: [
      "✅ Smart with money—finds ways to save without extreme sacrifices.",
      "✅ Balances financial planning with enjoying life.",
      "✅ Always looking for ways to optimize spending and earning.",
    ],
    weaknesses: [
      "❌ Might overthink financial decisions, leading to indecisiveness.",
      "❌ Can sometimes take too long to commit to big purchases.",
      "❌ May miss out on investing in riskier but rewarding opportunities.",
    ],
    waysToImprove: [
      "🔹 Don’t stress too much over small financial optimizations—sometimes, time is more valuable than saving a few dollars.",
      "🔹 Take calculated investment risks instead of always playing it safe.",
      "🔹 Focus on long-term financial goals rather than just short-term wins.",
    ],
  },
  Raccoon: {
    title: "🦝 Raccoon – The Resourceful Hustler 💼",
    intro:
      "Raccoons thrive on resourcefulness, making the most out of anything they find. You’re the same way—always looking for a side hustle, finding creative ways to earn money, and stretching every dollar. You might be reselling, flipping items, or cashing in on every deal possible.",
    strengths: [
      "✅ Excellent at finding new income streams and making money.",
      "✅ Quick thinker—adapts to financial situations easily.",
      "✅ Knows how to get value out of every dollar spent.",
    ],
    weaknesses: [
      "❌ Lacks financial stability—money comes and goes quickly.",
      "❌ Not the best at long-term financial planning.",
      "❌ Might rely too much on hustle culture rather than structured savings.",
    ],
    waysToImprove: [
      "🔹 Create a consistent financial plan—hustles are great, but stable savings matter too.",
      "🔹 Start investing some of your extra earnings so money works for you.",
      "🔹 Track income and expenses more carefully to avoid living paycheck to paycheck.",
    ],
  },
  Cheetah: {
    title: "🐆 Cheetah – The Impulsive Spender 💳",
    intro:
      "Just like a cheetah, your money moves fast—and usually straight out of your account. You love spontaneity, from last-minute trips to impulse shopping sprees. Life is meant to be lived, and you don’t want financial worries to slow you down.",
    strengths: [
      "✅ Enjoys life without financial anxiety.",
      "✅ Generous and fun-loving—always up for an adventure.",
      "✅ Great at making memorable experiences.",
    ],
    weaknesses: [
      "❌ Poor savings habits—future-you is always left picking up the pieces.",
      "❌ High risk of debt and financial instability.",
      "❌ Avoids budgeting or financial planning.",
    ],
    waysToImprove: [
      "🔹 Set automatic savings so some of your money is stashed away before you spend it.",
      "🔹 Use a budgeting app to track spending without feeling restricted.",
      "🔹 Give yourself a \"fun fund\" so you can enjoy life while still saving responsibly.",
    ],
  },
  "Golden Retriever": {
    title: "🐶 Golden Retriever – The Generous Spender 🎁",
    intro:
      "You have a heart of gold—literally. Always treating friends, covering bills, and surprising people with gifts, your generosity knows no bounds. You love making others happy, even if it means stretching your own finances too thin.",
    strengths: [
      "✅ Generous and thoughtful—always willing to help.",
      "✅ Creates strong relationships by showing appreciation through gifts.",
      "✅ Finds happiness in giving rather than hoarding wealth.",
    ],
    weaknesses: [
      "❌ Struggles to say no, even when money is tight.",
      "❌ Can sacrifice personal financial security for others.",
      "❌ Likely to overspend on social obligations.",
    ],
    waysToImprove: [
      "🔹 Set a budget for generosity—give, but not at the expense of your own needs.",
      "🔹 Practice saying no when needed—helping others shouldn’t leave you struggling.",
      "🔹 Focus on non-monetary ways to show appreciation, like quality time.",
    ],
  },
  Capybara: {
    title: "🦫 Capybara – The Chill Saver 🛟",
    intro:
      "Unbothered and stress-free, the capybara is all about balance. You don’t obsess over finances, but you also don’t make reckless decisions. You save just enough, spend just enough, and keep life moving at a relaxed pace.",
    strengths: [
      "✅ Stays calm about money—no panic, no stress.",
      "✅ Avoids extreme spending habits.",
      "✅ Enjoys life without overcomplicating finances.",
    ],
    weaknesses: [
      "❌ Too passive—may miss opportunities to grow wealth.",
      "❌ Might not be proactive about long-term financial planning.",
      "❌ Relies on \"it'll work out\" rather than taking action.",
    ],
    waysToImprove: [
      "🔹 Start setting financial goals, even if they’re simple.",
      "🔹 Consider investing so your savings grow over time.",
      "🔹 Take a more active role in planning for future expenses.",
    ],
  },
};
