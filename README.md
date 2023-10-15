# CodechefNotifier

Resources:
1. https://www.freecodecamp.org/news/web-scraping-in-javascript-with-puppeteer/
2. https://bretcameron.medium.com/how-to-build-a-web-scraper-using-javascript-11d7cd9f77f2
3. https://www.codechef.com/api/contests/LTIME21
4. https://jsonbeautifier.org/
5. https://www.codechef.com/api/contests/START104
6. maybe i can use axios to fetch the api response from this above endpoint
7. For simple data extraction, you can use Axios to fetch an API responses or a website HTML.
8. <div class="_timer__container_1c9os_518"><p>4 Days</p><p>14 Hrs</p></div>

9. capture this div element:
<tr class="MuiTableRow-root jss57 undefined jss59 jss55 MuiTableRow-hover" data-testid="MUIDataTableBodyRow-0" id="MUIDataTableBodyRow-0"><td class="MuiTableCell-root MuiTableCell-body jss61 jss68 jss72" data-colindex="0" data-testid="MuiDataTableBodyCell-0-0"><div class="jss61 jss62 jss65 jss66">Code</div><div class="jss61 jss66"><p>START104</p></div></td><td class="MuiTableCell-root MuiTableCell-body jss61 jss68 jss72 _name__cell_1c9os_439" data-colindex="1" data-testid="MuiDataTableBodyCell-1-0"><div class="jss61 jss62 jss65 jss66 _name__cell_1c9os_439">Name</div><div class="jss61 jss66 _name__cell_1c9os_439"><a href="https://www.codechef.com/START104"><span>Starters 104</span></a></div></td><td class="MuiTableCell-root MuiTableCell-body jss61 jss68 jss72 _start-data__cell_1c9os_442" data-colindex="2" data-testid="MuiDataTableBodyCell-2-0"><div class="lastColumn jss61 jss62 jss65 jss66 _start-data__cell_1c9os_442">Start</div><div class="jss61 jss66 _start-data__cell_1c9os_442"><div><div class="_start-date__container_1c9os_388"><p>18 Oct 2023</p><p class="_grey__text_1c9os_393">Wed 20:00</p></div></div></div></td><td class="MuiTableCell-root MuiTableCell-body jss61 jss68 jss72" data-colindex="3" data-testid="MuiDataTableBodyCell-3-0"><div class="jss61 jss62 jss65 jss66">Duration</div><div class="jss61 jss66"><div class="_duration__container_1c9os_396"><p>2 Hrs</p></div></div></td><td class="MuiTableCell-root MuiTableCell-body jss61 jss68 jss72" data-colindex="4" data-testid="MuiDataTableBodyCell-4-0"><div class="jss61 jss62 jss65 jss66">Starts in</div><div class="jss61 jss66"><div class="_timer__container_1c9os_518"><p>4 Days</p><p>14 Hrs</p></div></div></td><td class="MuiTableCell-root MuiTableCell-body jss61 jss68 jss72 _reminder__cell_1c9os_445" data-colindex="5" data-testid="MuiDataTableBodyCell-5-0"><div class="jss61 jss62 jss65 jss66 _reminder__cell_1c9os_445"> </div><div class="jss61 jss66 _reminder__cell_1c9os_445"><button type="button" class="_reminder-icon__container_1c9os_400" title="Set Reminder"><img src="https://cdn.codechef.com/images/icons/bell.svg" alt="bell"></button></div></td></tr>

10. this is the outer div of point 9)
#root > div > div._pageContainer_1se0b_3._dark_1se0b_9 > div > div > div._contest-tables__container_1c9os_225 > div:nth-child(2) > div._dataTable__container_1c9os_369 > div > div.jss14 > table > tbody

11) this is a td and we only want the first tr and possibly the 2nd tr which is first two contest

12) https://rapidapi.com/guides/how-to-get-data-from-api-javascript

13) Next steps: 
a)using a webscraper fetch all the latest contest values 
b)create a notifier either to desktop or to whatsapp or some other way, mailchimp. We can also use gmail api 
