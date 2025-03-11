import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

// 导入图片资源（确保文件在 src/images 下）
import squirrelImg from './images/Squirrel.png';
import penguinImg from './images/Penguin.png';
import owlImg from './images/Owl.png';
import foxImg from './images/Fox.png';
import raccoonImg from './images/Raccoon.png';
import cheetahImg from './images/Cheetah.png';
import goldenRetrieverImg from './images/GoldenRetriever.png';
import capybaraImg from './images/Capybara.png';

const animalData = {
  squirrel: {
    name: 'Squirrel',
    subtitle: 'The Over-Prepared Budgeter',
    description:
      "If financial responsibility were a sport, you'd be the MVP. Squirrels stash away acorns obsessively—just like you meticulously budget and save for the future. You’re always three steps ahead, ensuring your bank account is padded for every possible scenario—because you never know when a financial 'winter' will hit.",
    strengths:
      "✅ Hyper-organized with finances—probably has a color-coded spreadsheet for tracking expenses.\n✅ Rarely caught off guard by unexpected costs.\n✅ Disciplined saver, great at sticking to financial goals.",
    weaknesses:
      "❌ Overthinks every purchase—even small, guilt-free splurges.\n❌ Might hesitate to invest or spend money on experiences.\n❌ Can stress over finances even when there’s no reason to.",
    waysToImprove:
      "🔹 Allow yourself to enjoy your money occasionally—your savings won’t collapse because you bought a latte.\n🔹 Diversify savings by investing, so your money grows rather than just sitting in a low-interest account.\n🔹 Set a fun budget so you can spend without guilt while staying financially responsible.",
    detailImage: squirrelImg,
    iconImage: squirrelImg,
  },
  penguin: {
    name: 'Penguin',
    subtitle: 'Debt Fighter',
    description:
      "Penguins are resilient, always pushing forward through harsh conditions—just like you with your debt repayment strategy. Your top priority is tackling loans, credit card balances, or student debt with laser focus. Every extra dollar goes toward getting rid of what you owe.",
    strengths:
      "✅ Highly disciplined with money—stays on top of payments.\n✅ Likely has an airtight repayment plan and a solid understanding of credit scores.\n✅ Less likely to fall into financial traps or impulsive spending.",
    weaknesses:
      "❌ So focused on paying off debt that they forget to save or enjoy life.\n❌ Might avoid investing due to fear of financial risk.\n❌ Can be overly cautious, missing opportunities to grow wealth.",
    waysToImprove:
      "🔹 Balance debt repayment with building an emergency fund—don’t put every extra dollar into loans.\n🔹 Start small with investing while paying off debt, even if it’s just a few dollars a month.\n🔹 Allow yourself occasional guilt-free spending so life isn’t all about financial sacrifice.",
    detailImage: penguinImg,
    iconImage: penguinImg,
  },
  owl: {
    name: 'Owl',
    subtitle: 'The Investment Guru',
    description:
      "Wise and strategic, the owl is always thinking long-term. You’ve been tracking the stock market since before it was cool, and you know that compound interest is your best friend. You focus on making money work for you rather than just working for money.",
    strengths:
      "✅ Highly knowledgeable about investing and financial growth.\n✅ Prioritizes long-term wealth building over short-term spending.\n✅ Rarely makes impulsive financial decisions.",
    weaknesses:
      "❌ Can be too cautious, overanalyzing opportunities and delaying action.\n❌ Might avoid spending on personal enjoyment, even when affordable.\n❌ Can overcomplicate simple financial decisions.",
    waysToImprove:
      "🔹 Don’t let analysis paralysis stop you from taking action—sometimes, the best investment is simply starting.\n🔹 Allow yourself to spend on things that bring you happiness in the present.\n🔹 Educate others on investing—your knowledge could help friends and family grow their wealth too.",
    detailImage: owlImg,
    iconImage: owlImg,
  },
  fox: {
    name: 'Fox',
    subtitle: 'The Balanced Planner',
    description:
      "Clever and resourceful, the fox knows how to get the best deals while staying financially responsible. You have a balanced approach—saving and investing wisely, but also knowing when to treat yourself. You’re the type to stack discounts, use cashback apps, and maximize credit card rewards like a pro.",
    strengths:
      "✅ Smart with money—finds ways to save without extreme sacrifices.\n✅ Balances financial planning with enjoying life.\n✅ Always looking for ways to optimize spending and earning.",
    weaknesses:
      "❌ Might overthink financial decisions, leading to indecisiveness.\n❌ Can sometimes take too long to commit to big purchases.\n❌ May miss out on investing in riskier but rewarding opportunities.",
    waysToImprove:
      "🔹 Don’t stress too much over small financial optimizations—sometimes, time is more valuable than saving a few dollars.\n🔹 Take calculated investment risks instead of always playing it safe.\n🔹 Focus on long-term financial goals rather than just short-term wins.",
    detailImage: foxImg,
    iconImage: foxImg,
  },
  raccoon: {
    name: 'Raccoon',
    subtitle: 'The Resourceful Hustler',
    description:
      "Raccoons thrive on resourcefulness, making the most out of anything they find. You’re the same way—always looking for a side hustle, finding creative ways to earn money, and stretching every dollar. You might be reselling, flipping items, or cashing in on every deal possible.",
    strengths:
      "✅ Excellent at finding new income streams and making money.\n✅ Quick thinker—adapts to financial situations easily.\n✅ Knows how to get value out of every dollar spent.",
    weaknesses:
      "❌ Lacks financial stability—money comes and goes quickly.\n❌ Not the best at long-term financial planning.\n❌ Might rely too much on hustle culture rather than structured savings.",
    waysToImprove:
      "🔹 Create a consistent financial plan—hustles are great, but stable savings matter too.\n🔹 Start investing some of your extra earnings so money works for you.\n🔹 Track income and expenses more carefully to avoid living paycheck to paycheck.",
    detailImage: raccoonImg,
    iconImage: raccoonImg,
  },
  cheetah: {
    name: 'Cheetah',
    subtitle: 'The Impulsive Spender',
    description:
      "Just like a cheetah, your money moves fast—and usually straight out of your account. You love spontaneity, from last-minute trips to impulse shopping sprees. Life is meant to be lived, and you don’t want financial worries to slow you down.",
    strengths:
      "✅ Enjoys life without financial anxiety.\n✅ Generous and fun-loving—always up for an adventure.\n✅ Great at making memorable experiences.",
    weaknesses:
      "❌ Poor savings habits—future-you is always left picking up the pieces.\n❌ High risk of debt and financial instability.\n❌ Avoids budgeting or financial planning.",
    waysToImprove:
      "🔹 Set automatic savings so some of your money is stashed away before you spend it.\n🔹 Use a budgeting app to track spending without feeling restricted.\n🔹 Give yourself a 'fun fund' so you can enjoy life while still saving responsibly.",
    detailImage: cheetahImg,
    iconImage: cheetahImg,
  },
  goldenRetriever: {
    name: 'Golden Retriever',
    subtitle: 'The Generous Spender',
    description:
      "You have a heart of gold—always treating friends, covering bills, and surprising people with gifts, your generosity knows no bounds. You love making others happy, even if it means stretching your own finances too thin.",
    strengths:
      "✅ Generous and thoughtful—always willing to help.\n✅ Creates strong relationships by showing appreciation through gifts.\n✅ Finds happiness in giving rather than hoarding wealth.",
    weaknesses:
      "❌ Struggles to say no, even when money is tight.\n❌ Can sacrifice personal financial security for others.\n❌ Likely to overspend on social obligations.",
    waysToImprove:
      "🔹 Set a budget for generosity—give, but not at the expense of your own needs.\n🔹 Practice saying no when needed—helping others shouldn’t leave you struggling.\n🔹 Focus on non-monetary ways to show appreciation, like quality time.",
    detailImage: goldenRetrieverImg,
    iconImage: goldenRetrieverImg,
  },
  capybara: {
    name: 'Capybara',
    subtitle: 'The Chill Saver',
    description:
      "Unbothered and stress-free, the capybara is all about balance. You don’t obsess over finances, but you also don’t make reckless decisions. You save just enough, spend just enough, and keep life moving at a relaxed pace.",
    strengths:
      "✅ Stays calm about money—no panic, no stress.\n✅ Avoids extreme spending habits.\n✅ Enjoys life without overcomplicating finances.",
    weaknesses:
      "❌ Too passive—may miss opportunities to grow wealth.\n❌ Might not be proactive about long-term financial planning.\n❌ Relies on 'it'll work out' rather than taking action.",
    waysToImprove:
      "🔹 Start setting financial goals, even if they’re simple.\n🔹 Consider investing so your savings grow over time.\n🔹 Take a more active role in planning for future expenses.",
    detailImage: capybaraImg,
    iconImage: capybaraImg,
  },
};

const animalKeys = Object.keys(animalData);

const IntroductionPage = () => {
  // 初始状态设置为 penguin
  const [selectedAnimal, setSelectedAnimal] = useState('penguin');
  const animal = animalData[selectedAnimal];

  return (
    <div className="page-container">
      
      {/* 内容区域：左侧详情 + 右侧图标 */}
      <div className="content-area">
        {/* 详情区域 */}
        <div className="detail-container">
          <div className="detail-header">
            <h2 className="detail-title">{animal.name}</h2>
            <h3 className="detail-subtitle">{animal.subtitle}</h3>
          </div>
          <div className="detail-image-wrapper">
            <img src={animal.detailImage} alt={animal.name} />
          </div>
          <div className="detail-text">
            <section>
              <h4>Who am I?</h4>
              <p>{animal.description}</p>
            </section>
            <section>
              <h4>Strength</h4>
              <p>{animal.strengths}</p>
            </section>
            <section>
              <h4>Weakness</h4>
              <p>{animal.weaknesses}</p>
            </section>
            <section>
              <h4>Ways to Improve</h4>
              <p>{animal.waysToImprove}</p>
            </section>
          </div>
        </div>
        
        <div className="icons-container">
          {animalKeys.map((key) => (
            <div
              key={key}
              className="icon-wrapper"
              onClick={() => setSelectedAnimal(key)}
            >
              <div className="icon-bg"></div>
              <img src={animalData[key].iconImage} alt={animalData[key].name} className="icon-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
