interface Props {
	rowIndexStart: number;
	rowIndexEnd: number;
	totalRows: number;
}

export default function TableInfo({ rowIndexEnd, rowIndexStart, totalRows }: Props) {
	return (
		<div className="flex items-center gap-4">
			<div className="text-sm text-muted-foreground">
				{`Showing ${rowIndexStart} to ${rowIndexEnd} of ${totalRows} entries`}
			</div>
		</div>

	)
}
