// import React, { FunctionComponent } from 'react';
// import '../src/app/globals.scss';

// import clsx from 'clsx';

// export enum FlexContentDirection {
//   ROW = 'flex-content--direction-row',
//   COLUMN = 'flex-content--direction-column',
// }

// export enum FlexContentAlignment {
//   START = 'flex-content--align-start',
//   END = 'flex-content--align-end',
//   CENTER = 'flex-content--align-center',
//   INITIAL = 'flex-content--align-initial',
// }

// export enum FlexContentJustify {
//   START = 'flex-content--justify-start',
//   END = 'flex-content--justify-end',
//   CENTER = 'flex-content--justify-center',
//   SPACE_AROUND = 'flex-content--justify-space-around',
//   SPACE_BETWEEN = 'flex-content--justify-space-between',
//   SPACE_EVENLY = 'flex-content--justify-space-evenly',
// }

// export enum FlexContentSpacing {
//   XSMALL = 'flex-content--spacing-xsmall',
//   SMALL = 'flex-content--spacing-small',
//   MEDIUM = 'flex-content--spacing-medium',
//   LARGE = 'flex-content--spacing-large',
//   LARGE_PLUS = 'flex-content--spacing-large-plus',
//   XLARGE = 'flex-content--spacing-xlarge',
// }

// export enum FlexContentMobileDirection {
//   ROW = 'flex-content--mobile-direction-row',
//   COLUMN = 'flex-content--mobile-direction-column',
//   COLUMN_REVERSE = 'flex-content--mobile-direction-column-reverse',
// }

// export enum FlexContentLayout {
//   COLUMNS = 'flex-content--layout-columns',
//   TWO_COLUMNS_WIDE_LEFT = 'flex-content--layout-two-columns-wide-left',
//   TWO_COLUMNS_WIDE_RIGHT = 'flex-content--layout-two-columns-wide-right',
// }

// export class FlexContentProps {
//   static LAYOUT_COLUMNS: FlexContentProps = new FlexContentProps(
//     FlexContentDirection.ROW,
//     FlexContentSpacing.LARGE_PLUS,
//     FlexContentLayout.COLUMNS
//   );
//   static LAYOUT_ROWS: FlexContentProps = new FlexContentProps(
//     FlexContentDirection.COLUMN,
//     FlexContentSpacing.LARGE_PLUS
//   );

//   children: React.ReactNode;
//   direction: FlexContentDirection;
//   alignment?: FlexContentAlignment;
//   justify?: FlexContentJustify;
//   spacing?: FlexContentSpacing;
//   allowWrap?: boolean;
//   mobileDirection?: FlexContentMobileDirection;
//   cssClass?: string;
//   layout?: FlexContentLayout;

//   constructor(
//     direction: FlexContentDirection,
//     spacing: FlexContentSpacing,
//     layout?: FlexContentLayout,
//     mobileDirection?: FlexContentMobileDirection
//   ) {
//     this.direction = direction;
//     this.spacing = spacing;
//     this.layout = layout;
//   }
// }

// const FlexContent: FunctionComponent<FlexContentProps> = (props) => {
//   const {
//     children,
//     direction,
//     alignment = FlexContentAlignment.INITIAL,
//     justify,
//     spacing,
//     allowWrap,
//     mobileDirection,
//     cssClass,
//     layout,
//   } = props;

//   return (
//     <div
//       className={clsx(
//         'flex-content',
//         direction,
//         alignment,
//         justify,
//         spacing,
//         { 'flex-content--wrap': allowWrap },
//         mobileDirection,
//         cssClass,
//         layout
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export default FlexContent;
