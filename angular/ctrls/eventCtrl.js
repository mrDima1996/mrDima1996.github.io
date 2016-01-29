/**
 * Created by mrDima on 28.01.2016.
 */
angular.module('app')
    .controller('eventCtrl', ['$scope', 'data','schedule', function($scope, data, schedule) {
   // �������� ������ �� ����� �������
    //��� ��������, �� �������� ���� ��� �����

    var eventData = data.getEvent($scope.number);

     if ($scope.number) $scope.show = 'visible';
     else $scope.show = 'hidden';
    $scope.name = eventData.name; //���������
    $scope.content = eventData.content; //�������

    $scope.displayContent = $scope.content;
    if ($scope.content.length>42) $scope.displayContent = $scope.content.slice(0,42)+'...';
    else $scope.displayContent = $scope.content; //�������� �������, ���� ������� �������

    //������ ����� �������. ������������� ������ �� ������� ������ � �����.
    $scope.aHeight = schedule.getHeight($scope.duration);
    if (!$scope.aHeight) $scope.aHeight = '0px';
    else $scope.aHeight += 'px';
        console.log($scope.aHeight);

}]);