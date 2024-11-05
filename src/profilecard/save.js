import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";
export default function save({ attributes }) {
	const { contentBg, content, style } = attributes;
	return (
		<>
			<style>{style}</style>
			<div {...useBlockProps.save()}>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
