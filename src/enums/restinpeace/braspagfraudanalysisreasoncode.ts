
export enum BraspagFraudAnalysisReasonCode {
	Success= 100,
	MissingMandatoryFields= 101,
	InvalidField= 102,
	GeneralSystemFailure= 150,
	OrderReceivedWithServerTimeout= 151,
	OrderReceivedWithTimeout= 152,
	CardExpired= 202,
	InvalidAccountNumber= 231,
	ProblemsOnDealerConfig= 234,
	FraudPointsExceed= 400,
	OrderMarkedForRevision= 480,
	OrderRejectedByRevision= 481,
}