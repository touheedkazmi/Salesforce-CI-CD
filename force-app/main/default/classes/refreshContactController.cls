public with sharing class refreshContactController {
    //static and aura enabled must be there for using apex class for lwc
    // good to use cacheable = true - if performing get data
        @AuraEnabled(cacheable=true)
        public static List<Contact> getContactList() {
            return [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 10];
        }         
    }