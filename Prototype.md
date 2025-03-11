### Group 1
### Project Name: FINFIN - Discover Your Financial Personality
### Group Members: William Li, Zhiming Huang, Yijun Chen, Cherish Chen, Jennifer Feng‬

###
### ‬Coded Prototype:‬
### https://info442c-win2024.github.io/Group1/‬

###
## Protocol:
#### The Prototype and Testing Protocol should detail how you plan to visualize the solution before‬ you code it, and how you plan to test it after initial coding has been completed. It should answer‬ the following questions:
## 1. Will you create an interactive prototype before you begin coding (e.g. using Figma), or‬ will you work from static wireframes?
####         * Yes, we will create a interactive wireframe on Figma before we develop the real website.
####
####

## 2. What are the acceptance tests that your team will perform before beginning user‬ testing? Describe the acceptance testing process for at least two key features, including‬ which results would indicate a successful test and which results would indicate a failed‬ test
####         * Quiz Feature: To verify that the quiz displays one question at a time, records user responses‬ accurately, also calculates and displays the final result correctly.
####
### Testing Process for both Website and mobile web:
#### 1)‬‭ Start the quiz and ensure the first question is displayed with all the‬ choices listed.
#### 2)‬‭ Select an answer, then click the “Next” button to confirm that the next‬ question loads.
#### 3)‬‭ Click the “Previous” button to ensure that the previously selected answer‬ remains intact.
#### 4)‬‭ Complete all questions and submit the quiz.
#### 5)‬‭ Verify that the system takes users’ input correctly, determines the‬ personality type with the highest score, and displays the correct result‬ along with its analysis and advice.
####
#### Successful Test Criteria:
#### * Each question is presented one at a time with functioning “Previous” and “Next” buttons.‬
#### * User responses are correctly recorded and persist when navigating back.
#### * The final result accurately reflects the highest scoring personality type, and the‬ result page displays complete and correct analysis.
#### * For the mobile version, users can view the all the content in the right size and easy to direct to the page that they want.
####
#### Failed Test Criteria:
#### * Questions do not load correctly, or navigation buttons fail to work.
#### * User answers are not recorded or are lost when navigating.
#### * The final result is incorrect or the result page shows errors/blank content.
#### * For the mobile version, users will see the buttons without right sizes and have to move the page to see the full buttons.
####
####

## 3. What are the limitations of your acceptance tests? List some of the ways that your‬ team's in-house testing environment may differ from the context in which your expected‬ users will be interacting with the product.
####
#### * Users without full participation:
#### a) Based on the quiz format, we will require users to answer each‬ multiple-choice question in order to get a relatively correct test result.‬ However, some users may not answer each multiple-choice question‬ carefully and try to finish the test as soon as possible. This behavior will‬ negatively affect the result of our test.
####
#### * The accuracy of the result:
#### a) We have multiple animals to present the financial personalities for users‬ based on their answers to each question. However, users’ answers are‬ possible to be qualified for more than one animal. Under this situation, the‬ final result animal may not accurately present the user's real financial‬ personality.
#### b) We are trying to use a dozen of multiple questions to know more about‬ users’ financial habits and define their financial personalities. However,‬ we are not sure if our provided multiple-choices for each question can‬ fully cover their financial personalities.
####
####

## 4. How will you conduct user testing
#### We’ll test the Financial Habit Quiz Website with college students and young‬ adults to see how easily they can navigate, complete the quiz, and understand‬ their results. Users will share their first impressions, try the quiz, and give‬ feedback on clarity, engagement, and usability. We’ll also check for UI/UX and‬ accessibility issues, like readability and navigation. Finally, we’ll gather‬ open-ended feedback to improve the overall experience.
#### Details in the doc: https://docs.google.com/document/d/1AIyrJ22NboeeJxHKH8opfT-oX6xQ26csT2jb0JOnVyA/edit?tab=t.0
####
####

## 5. Top 5 questions you asked your users
#### 5 questions that must asked:
#### a) What are your first impressions of this website?
#### b) Did you find any frustrations or confusion when you filled out the‬ questions?
#### c) Are the questions easy to understand
#### d) Did you find the quiz easy and intuitive to navigate? Were there any‬ points where you felt confused or frustrated?
#### e) What would make you stop taking the quiz before finishing it?
#### f) Did your quiz result feel accurate and useful for you to start making your‬ financial plan?
#### g) Would you share this website with a friend? Why or why not?
#### h)  If you could change one thing to make this quiz better, what would it be?‬ And why would you change it?  If you could rank that feature from 1 - 10 (1 - so hard to use, 10 - so easy & clear!), what would it be?
####
####

## 6. Names (first name only is fine) of each user (5 minimum users)‬
#### Adam, Zoe, Alan, Roger, Simon, Cindy
####
####

## 7.‬‭ How will you decide which bugs to fix first?
#### a) During the user testing interview, we will ask them about how they view the‬ quiz feature on our website and how they would grade the usability and‬ accessibility of the feature. Then we could list out the bug fix priority from there.‬
#### b) We will prioritize fixing bugs that may have the most impact. For example, bugs‬ on the functionality of the website should be prioritized to be fixed first as it‬ determines whether the website will help users reach their goals.Then, we will‬ focus on fixing bugs on, for instance, user experience related ones, as they are‬ determinant on if users will enjoy, come back or share out this website.
#### c) We also found that we need to re-design the mobile version, because the buttons are not in the right size and there are some overlaps in the page. We will re-design the mobile version after finishing all bugs of website version.
####

## 8. How will you re-test the solution after the bug fixes have been completed?
#### a) We’ll go through the user testing again (see details in question 4) and see how‬ the user experience is for users.‬
#### b) We will show the old solution and the new solution to users to learn if the new solution is on the right track to help users reach their goals. Also, if we have‬ multiple versions of the new solution, we will do a quick AB testing. We would like‬ to know which version users prefer and why to further iterate the product.‬
‭

## 9 Different screen size testing.

#### During our testing, we encountered issues with responsive design for small screens. Following our testing protocol, we thoroughly examined and identified solutions. In the final test, we discovered that our initial use of absolute positioning to optimize desktop display resulted in UI size inconsistencies on mobile devices.

#### For this known issue, we propose the following solutions:
#### 1. Replace key UI elements' absolute positioning with Flexbox and relative units
#### 2. Add targeted media queries to handle different screen sizes
#### 3. Readjust button sizes and spacing for mobile to ensure proper clickability
#### 4. Reorganize page layout to prevent element overlapping

#### By implementing these improvements, our website can function properly in both desktop and mobile versions of Chrome without functional errors. 