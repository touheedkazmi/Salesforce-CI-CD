trigger AccountTrigger1 on Account (before insert) {

    for(Account acc: Trigger.new){
        acc.Description = 'Description from a trigger test adding few more lines';
        acc.Phone = '121212999';
        acc.Industry = 'Banking';
        acc.Website = 'www.testwebsite.com';
    }

}