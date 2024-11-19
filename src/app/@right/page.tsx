import Title from "@/components/Title";

export default async function right() {
	return (
    <div className="flex flex-col item-start justify-start font-departureMono">
			<Title title="Summary" className="text-sm text-black font-departureMono" />
			<div className="text-xs mt-4">
				<div>
					<div>
						<Item itemKey="name" value='"No0ne"' />
						<Item itemKey="age" value="16" />
            <Item itemKey="now" value='["building portfolio", "learning low level things"]' />
						<br />
						<p className="text-black">[tech]</p>
            <Item itemKey="languages" value='["C","JS/TS", "lua", "python?"]' />
            <Item itemKey="web" value='["React","Nextjs", "Taiwlindcss"]' />
            <Item itemKey="tools" value='["neovim","arch linux", "Git/Github"]' />
					</div>
				</div>
			</div>
		</div>
	);
}

const Item = ({ itemKey, value }: { itemKey: string; value: string }) => {
	return (
		<p>
			<span className="text-black">{itemKey}</span>: <span>{value}</span>
		</p>
	);
};
