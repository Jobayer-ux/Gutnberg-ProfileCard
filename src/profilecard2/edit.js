import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import {
	BlockControls,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

export default function Edit({ attributes, setAttributes, context }) {
	const {
		nameContent,
		roleContent,
		paraContent,
		pronumContent,
		profollowContent,
		profollowContent1,
		profollowContent2,
		profollowContent3,
		profollowContent4,
		btnText,
		proborRadius,
		headerBgColor,
		headerHeight,
		image = {},
		picborderRadius,
		borderStyle,
		borderWidth,
		borderColor,
		imWidth,
		imHeight,
		nameColor,
		roleColor,
		paraColor,
		pafontSize,
		follColor,
		numFontsize,
		numColor,
		numWeight,
		btnColor,
		btnBgColor,
		btnfontSize,
		btnborderRadius,
		contentGrid,
		contentGridGap,
		contentBgColor,
	} = attributes;
	const blockProps = useBlockProps();

	return (
		<>
			{image?.url && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(v) =>
								setAttributes({
									image: {
										url: v?.url,
										alt: v?.alt,
										id: v?.id,
									},
								})
							}
							allowedTypes={["image"]}
							value={image?.id}
							render={({ open }) => (
								<ToolbarButton
									icon="edit"
									title={__("Edit", "your-text-domain")}
									onClick={open}
								/>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<div {...blockProps}>
				<div className="profile-card">
					<div className="header"></div>
					<div className="content">
						<div className="profile-pic">
							{image?.url ? (
								<img
									src={image.url}
									alt={image.alt || __("Image", "your-text-domain")}
								/>
							) : (
								<MediaPlaceholder
									onSelect={(v) =>
										setAttributes({
											image: {
												url: v?.url,
												alt: v?.alt,
												id: v?.id,
											},
										})
									}
									allowedTypes={["image"]}
									multiple={false}
									labels={{ title: __("The Image", "your-text-domain") }}
								/>
							)}
						</div>
						<RichText
							tagName="p"
							value={nameContent}
							className="pro-name"
							onChange={(nameContent) => setAttributes({ nameContent })}
							style={{ color: nameColor }}
						/>
						<RichText
							tagName="p"
							className="role"
							value={roleContent}
							onChange={(roleCntent) => setAttributes({ roleCntent })}
						/>
						<RichText
							tagName="p"
							value={paraContent}
							className="description"
							onChange={(paraContent) => setAttributes({ paraContent })}
						/>
						<div className="stats">
							<div className="stat">
								<RichText
									tagName="p"
									className="pro-num"
									value={pronumContent}
									onChange={(pronumContent) => setAttributes({ pronumContent })}
								/>
								<RichText
									tagName="p"
									value={profollowContent}
									className="pro-foll"
									onChange={(profollowContent) =>
										setAttributes({ profollowContent })
									}
								/>
							</div>
							<div className="stat">
								<RichText
									tagName="p"
									value={profollowContent2}
									onChange={(profollowContent2) =>
										setAttributes({ profollowContent2 })
									}
									className="pro-num"
								/>
								<RichText
									tagName="p"
									value={profollowContent1}
									className="pro-foll"
									onChange={(profollowContent1) =>
										setAttributes({ profollowContent1 })
									}
								/>
							</div>
							<div className="stat">
								<RichText
									tagName="p"
									className="pro-num"
									value={profollowContent3}
									onChange={(profollowContent3) =>
										setAttributes({ profollowContent3 })
									}
								/>
								<RichText
									tagName="p"
									value={profollowContent4}
									onChange={(profollowContent4) =>
										setAttributes({ profollowContent4 })
									}
									className="pro-foll"
								/>
							</div>
						</div>
						<RichText
							tagName="button"
							value={btnText}
							className="btn"
							onChange={(btnText) => setAttributes({ btnText })}
							placeholder="Button Text"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
