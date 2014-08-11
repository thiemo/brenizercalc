function CalcController($scope) {

	$scope.outputvalues = [];

	$scope.calcApert = function() {
		var inputFocal = $scope.inputFocal;
		var inputAperture = $scope.inputAperture;
		var inputWidth = $scope.inputWidth;
		var inputHeight = $scope.inputHeight;
		var outputWidth = $scope.outputWidth;
		var outputHeight = $scope.outputHeight;
		var diag1 = Math.sqrt((inputWidth * inputWidth) + (inputHeight * inputHeight));
		var diag2 = Math.sqrt((outputWidth * outputWidth) + (outputHeight * outputHeight));
		var outputAperture = inputAperture * (diag1 / diag2);
		if ( outputAperture > 0 )
		{
			return (Math.round(outputAperture * 100) / 100);
			}
		else
		{
			return "...";
		}
	};

	$scope.calcFocal = function() {
		var inputFocal = $scope.inputFocal;
		var inputAperture = $scope.inputAperture;
		var inputWidth = $scope.inputWidth;
		var inputHeight = $scope.inputHeight;
		var outputWidth = $scope.outputWidth;
		var outputHeight = $scope.outputHeight;

		var area = inputWidth * inputHeight;

		var diag1 = Math.sqrt((inputWidth * inputWidth) + (inputHeight * inputHeight));
		var diag2 = Math.sqrt((outputWidth * outputWidth) + (outputHeight * outputHeight));
		var outputFocal = inputFocal * (diag1 / diag2);

		if ( outputFocal > 0 )
		{
			return (Math.round(outputFocal * 100) / 100);
			}
		else
		{
			return "...";
		}
	};

}
