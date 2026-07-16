public with sharing class accountController2 {

    @AuraEnabled(cacheable=true) // if we are getting the data its good to cache it
    //method must have statcic keyword and either public or global access modifier
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry FROM Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true) // if we are getting the data its good to cache it
    //method must have statcic keyword and either public or global access modifier
    public static List<Account> filterAccountByType(String type){
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Type = :type LIMIT 5];
    }
}