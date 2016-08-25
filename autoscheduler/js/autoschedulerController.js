// Define function that fires when HomeController is used.
function AutoschedulerController($scope){
	$scope.list = [
		{ label: "Contracted Hours", isChecked: true, isDisabled: false, isSortable: true },
		{ label: "Regularity - Shift length", isChecked: true, isDisabled: false, isSortable: true },
		{ label: "Regularity - Shift time", isChecked: true, isDisabled: false, isSortable: true },
		{ label: "Regularity - Shift day", isChecked: true, isDisabled: false, isSortable: true },
		{ label: "Weekends worked", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Weekends worked - Strict", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Availability - Preferences", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Availability - Fairness", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Cheapest Schedule", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Rotation - Shift length", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Rotation - Shift time", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Rotation - Shift day", isChecked: false, isDisabled: false, isSortable: true },
		{ label: "Location", isChecked: true, isDisabled: true, isSortable: false },
		{ label: "Unavailability", isChecked: true, isDisabled: true, isSortable: false },
		{ label: "EWTD - Fast", isChecked: false, isDisabled: false, isSortable: false },
		{ label: "EWTD - Comprehensive", isChecked: false, isDisabled: false, isSortable: false },
		{ label: "5 days in 7", isChecked: true, isDisabled: false, isSortable: false },
		{ label: "Positions", isChecked: true, isDisabled: false, isSortable: false },
		{ label: "Skills", isChecked: true, isDisabled: false, isSortable: false }
	]
}