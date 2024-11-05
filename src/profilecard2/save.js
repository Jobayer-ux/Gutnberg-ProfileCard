import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		nameContent,
		roleContent,
		paraContent,
		profollowContent,
		profollowContent2,
		profollowContent1,
		profollowContent3,
		profollowContent4,
		image,
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

	return (
		<div {...useBlockProps.save()}>
			<div className="profile-card">
				<div className="header"></div>
				<div className="profile-pic">
					{image?.url ? (
						<img src={image.url} alt={image.alt || "Profile image"} />
					) : (
						<div className="placeholder">Profile Image Placeholder</div>
					)}
				</div>
				<p className="pro-name">{nameContent}</p>
				<p className="role">{roleContent}</p>
				<p className="description">{paraContent}</p>
				<div className="stats">
					<div className="stat">
						<p className="pro-num">{profollowContent2}</p>
						<p className="pro-foll">{profollowContent}</p>
					</div>
					<div className="stat">
						<p className="pro-num">{profollowContent3}</p>
						<p className="pro-foll">{profollowContent1}</p>
					</div>
					<div className="stat">
						<p className="pro-num">{profollowContent3}</p>
						<p className="pro-foll">{profollowContent4}</p>
					</div>
				</div>
				<button className="btn">{btnText}</button>
			</div>
		</div>
	);
}
