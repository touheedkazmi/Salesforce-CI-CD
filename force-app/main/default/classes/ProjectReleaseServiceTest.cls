@isTest
private class ProjectReleaseServiceTest {
    @isTest
    static void testGetReleaseMessage() {
        Test.startTest();
        String message = ProjectReleaseService.getReleaseMessage();
        Test.stopTest();

        System.assertEquals('Project is ready for UAT deployment', message,
            'getReleaseMessage should return the expected release message.');
    }
}
