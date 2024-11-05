import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import "./editor.scss";
import {
	ColorPalette,
	PanelBody,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		nameContent,
		style,
		roleContent,
		paraContent,
		pronumContent,
		profollowContent,
		profollowContent2,
		profollowContent1,
		profollowContent3,
		profollowContent4,
		btnText,
		proborRadius,
		headerBgColor,
		headerHeight,
		picborderRadius,
		borderStyle,
		borderWidth,
		borderColor,
		imWidth,
		imHeight,
		nameColor,
		roleColor,
		paraColor,
		namefontsize,
		rolefontsize,
		parafontsize,
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

	const blockProps = useBlockProps({});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["create-block/profilecard2"],
		renderAppender: InnerBlocks.ButtonBlockAppender,
	});
	const customStyle = `
		.wp-block-create-block-profilecard {
			display: grid;
			grid-template-columns: repeat(${contentGrid}, 1fr);
			gap: ${contentGridGap}px;
			
		}
			
		.profile-card {
			border-radius: ${proborRadius}px;
			background-color: ${contentBgColor};

		}
			.btn{
				btnText: ${btnText};
				color: ${btnColor};
				background-color: ${btnBgColor};
				font-size: ${btnfontSize}px;
				border-radius: ${btnborderRadius}px;
			}
				.pro-name{
					color: ${nameColor};
					font-size: ${namefontsize}px;
				}
					.pro-num{
						color: ${numColor};
						font-size: ${numFontsize}px;
						font-weight: ${numWeight};

					}
				.role{
					color: ${roleColor};
					font-size: ${rolefontsize}px;

				}
				.description{
					color: ${paraColor};
					font-size: ${parafontsize}px;
				}
				.pro-foll{
					color: ${follColor};
					font-size: ${pafontSize}px;
				}

		.header {
			background-color: ${headerBgColor};
			height: ${headerHeight}px;
		}
			.profile-pic{
				width: ${imWidth}px;
				height: ${imHeight}px;
				
			}
		.profile-pic img {
			border-radius: ${picborderRadius}px;
			border-style: ${borderStyle};
			border-width: ${borderWidth}px;
			border-color: ${borderColor};
		},
		

		

		
			
		
	`;

	useEffect(() => {
		setAttributes({ style: customStyle });
	}, [
		nameContent,
		roleContent,
		paraContent,
		profollowContent,
		profollowContent2,
		profollowContent1,
		profollowContent3,
		profollowContent4,
		btnText,
		proborRadius,
		headerBgColor,
		headerHeight,
		picborderRadius,
		borderStyle,
		borderWidth,
		borderColor,
		imWidth,
		imHeight,
		nameColor,
		roleColor,
		paraColor,
		namefontsize,
		rolefontsize,
		parafontsize,
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
	]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Content Grid")}>
					<RangeControl
						label={__("Grid Columns")}
						value={contentGrid}
						onChange={(newColumns) =>
							setAttributes({ contentGrid: newColumns })
						}
						min={1}
						max={4}
					/>
					<RangeControl
						label={__("Grid Gap")}
						value={contentGridGap}
						onChange={(newGap) => setAttributes({ contentGridGap: newGap })}
						min={0}
						max={50}
					/>
				</PanelBody>
				<PanelBody title={__("Content Background Color")}>
					<PanelColorSettings
						title={__("Content Background Color")}
						colorSettings={[
							{
								value: contentBgColor,
								onChange: (newColor) => {
									setAttributes({ contentBgColor: newColor });
								},
								label: __("Content Background Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Border Radius")}
						value={proborRadius}
						onChange={(newRadius) => setAttributes({ proborRadius: newRadius })}
						min={0}
						max={50}
					/>
				</PanelBody>
				<PanelBody title={__("Header Background Color")}>
					<PanelColorSettings
						title={__("Header Background Color")}
						colorSettings={[
							{
								value: headerBgColor,
								onChange: (newColor) => {
									setAttributes({ headerBgColor: newColor });
								},
								label: __("Header Background Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Header Height")}
						value={headerHeight}
						onChange={(newHeight) => setAttributes({ headerHeight: newHeight })}
						min={100}
						max={300}
					/>
				</PanelBody>
				<PanelBody title={__("Profile Picture")}>
					<RangeControl
						label={__("Width")}
						value={imWidth}
						onChange={(newWidth) => setAttributes({ imWidth: newWidth })}
						min={100}
						max={300}
					/>
					<RangeControl
						label={__("Height")}
						value={imHeight}
						onChange={(newHeight) => setAttributes({ imHeight: newHeight })}
						min={100}
						max={300}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={picborderRadius}
						onChange={(newRadius) =>
							setAttributes({ picborderRadius: newRadius })
						}
						min={0}
						max={50}
					/>
					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={[
							{ label: __("Solid"), value: "solid" },
							{ label: __("Dotted"), value: "dotted" },
							{ label: __("Dashed"), value: "dashed" },
						]}
						onChange={(newStyle) => setAttributes({ borderStyle: newStyle })}
					/>
					<RangeControl
						label={__("Border Width")}
						value={borderWidth}
						onChange={(newWidth) => setAttributes({ borderWidth: newWidth })}
						min={0}
						max={10}
					/>
					<PanelColorSettings
						title={__("Border Color")}
						colorSettings={[
							{
								value: borderColor,
								onChange: (newColor) => {
									setAttributes({ borderColor: newColor });
								},
								label: __("Border Color"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody title={__("Text Colors")}>
					<PanelColorSettings
						title={__("Name Color")}
						colorSettings={[
							{
								value: nameColor,
								onChange: (newColor) => {
									setAttributes({ nameColor: newColor });
								},
								label: __("Name Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Name Font Size")}
						value={namefontsize}
						onChange={(newSize) => setAttributes({ namefontsize: newSize })}
						min={10}
						max={50}
					/>

					<PanelColorSettings
						title={__("Role Color")}
						colorSettings={[
							{
								value: roleColor,
								onChange: (newColor) => {
									setAttributes({ roleColor: newColor });
								},
								label: __("Role Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Role Font Size")}
						value={rolefontsize}
						onChange={(newSize) => setAttributes({ rolefontsize: newSize })}
						min={10}
						max={50}
					/>
					<PanelColorSettings
						title={__("Paragraph Color")}
						colorSettings={[
							{
								value: paraColor,
								onChange: (newColor) => {
									setAttributes({ paraColor: newColor });
								},
								label: __("Paragraph Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Paragraph Font Size")}
						value={parafontsize}
						onChange={(newSize) => setAttributes({ parafontsize: newSize })}
						min={10}
						max={50}
					/>
				</PanelBody>
				<PanelBody title={__("Number")}>
					<PanelColorSettings
						title={__("Number Color")}
						colorSettings={[
							{
								value: numColor,
								onChange: (newColor) => {
									setAttributes({ numColor: newColor });
								},
								label: __("Number Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Number Font Size")}
						value={numFontsize}
						onChange={(newSize) => setAttributes({ numFontsize: newSize })}
						min={10}
						max={50}
					/>
					<SelectControl
						label={__("Number Weight")}
						value={numWeight}
						options={[
							{ label: __("Normal"), value: "normal" },
							{ label: __("Bold"), value: "bold" },
						]}
						onChange={(newWeight) => setAttributes({ numWeight: newWeight })}
					/>
				</PanelBody>

				<PanelBody title={__("Follow Button")}>
					<PanelColorSettings
						title={__("Follow Button Color")}
						colorSettings={[
							{
								value: follColor,
								onChange: (newColor) => {
									setAttributes({ follColor: newColor });
								},
								label: __("Follow Button Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Button Font Size")}
						value={pafontSize}
						onChange={(newSize) => setAttributes({ pafontSize: newSize })}
						min={10}
						max={50}
					/>
				</PanelBody>
				<PanelBody title={__("Button")}>
					<PanelColorSettings
						title={__("Button Color")}
						colorSettings={[
							{
								value: btnColor,
								onChange: (newColor) => {
									setAttributes({ btnColor: newColor });
								},
								label: __("Button Color"),
							},
						]}
					/>
					<PanelColorSettings
						title={__("Button Background Color")}
						colorSettings={[
							{
								value: btnBgColor,
								onChange: (newColor) => {
									setAttributes({ btnBgColor: newColor });
								},
								label: __("Button Background Color"),
							},
						]}
					/>
					<RangeControl
						label={__("Button Font Size")}
						value={btnfontSize}
						onChange={(newSize) => setAttributes({ btnfontSize: newSize })}
						min={10}
						max={50}
					/>
					<RangeControl
						label={__("Button Border Radius")}
						value={btnborderRadius}
						onChange={(newRadius) =>
							setAttributes({ btnborderRadius: newRadius })
						}
						min={0}
						max={50}
					/>
				</PanelBody>
			</InspectorControls>
			<style>{style}</style>
			<div {...innerBlocksProps} />
		</>
	);
}
