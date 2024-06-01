import classnames from '../classnames'
import type { UiType } from '../types/uiClasses'

const breakpoints = {
    xxl: 1440,
    xl: 1200,
    lg: 991,
    md: 767,
    sm: 576
} as const

const classNamesResolver = (...strings: Array<string | number | boolean | undefined | null>): string | null | undefined => {
    if (strings.some((item) => item === undefined || item === null)) return null

    return strings.join('')
}

export const uiClasses = ({ direction, align, gap, h, justify, grow, lg, md, p, radius, sm, w, maxW, wrap, xl, xxl, display, cols, textAlign }: UiType) => {
    return classnames(
        classNamesResolver('flex_', direction, '_gap_', gap ? gap : 0),
        classNamesResolver('xxl_flex_', xxl?.direction, '_gap_', xxl?.gap ? xxl?.gap : 0),
        classNamesResolver('xl_flex_', xl?.direction, '_gap_', xl?.gap ? xl?.gap : 0),
        classNamesResolver('lg_flex_', lg?.direction, '_gap_', lg?.gap ? lg?.gap : 0),
        classNamesResolver('md_flex_', md?.direction, '_gap_', md?.gap ? md?.gap : 0),
        classNamesResolver('sm_flex_', sm?.direction, '_gap_', sm?.gap ? sm?.gap : 0),

        classNamesResolver('jus_con_', justify),
        classNamesResolver('xxl_jus_con_', xxl?.justify),
        classNamesResolver('xl_jus_con_', xl?.justify),
        classNamesResolver('lg_jus_con_', lg?.justify),
        classNamesResolver('md_jus_con_', md?.justify),
        classNamesResolver('sm_jus_con_', sm?.justify),

        classNamesResolver('align_', align),
        classNamesResolver('xxl_align_', xxl?.align),
        classNamesResolver('xl_align_', xl?.align),
        classNamesResolver('lg_align_', lg?.align),
        classNamesResolver('md_align_', md?.align),
        classNamesResolver('sm_align_', sm?.align),

        classNamesResolver('f_', wrap),
        classNamesResolver('xxl_f_', xxl?.wrap),
        classNamesResolver('xl_f_', xl?.wrap),
        classNamesResolver('lg_f_', lg?.wrap),
        classNamesResolver('md_f_', md?.wrap),
        classNamesResolver('sm_f_', sm?.wrap),

        classNamesResolver('grow_', grow),
        classNamesResolver('xxl_grow_', xxl?.grow),
        classNamesResolver('xl_grow_', xl?.grow),
        classNamesResolver('lg_grow_', lg?.grow),
        classNamesResolver('md_grow_', md?.grow),
        classNamesResolver('sm_grow_', sm?.grow),

        classNamesResolver('w', w),
        classNamesResolver('xxl_w', xxl?.w),
        classNamesResolver('xl_w', xl?.w),
        classNamesResolver('lg_w', lg?.w),
        classNamesResolver('md_w', md?.w),
        classNamesResolver('sm_w', sm?.w),

        classNamesResolver('max_w', maxW),
        classNamesResolver('xxl_max_w', xxl?.maxW),
        classNamesResolver('xl_max_w', xl?.maxW),
        classNamesResolver('lg_max_w', lg?.maxW),
        classNamesResolver('md_max_w', md?.maxW),
        classNamesResolver('sm_max_w', sm?.maxW),

        classNamesResolver('br', radius),
        classNamesResolver('xxl_br', xxl?.radius),
        classNamesResolver('xl_br', xl?.radius),
        classNamesResolver('lg_br', lg?.radius),
        classNamesResolver('md_br', md?.radius),
        classNamesResolver('sm_br', sm?.radius),

        classNamesResolver('h', h),
        classNamesResolver('xxl_h', xxl?.h),
        classNamesResolver('xl_h', xl?.h),
        classNamesResolver('lg_h', lg?.h),
        classNamesResolver('md_h', md?.h),
        classNamesResolver('sm_h', sm?.h),

        classNamesResolver('p', p),
        classNamesResolver('xxl_p', xxl?.p),
        classNamesResolver('xl_p', xl?.p),
        classNamesResolver('lg_p', lg?.p),
        classNamesResolver('md_p', md?.p),
        classNamesResolver('sm_p', sm?.p),

        classNamesResolver(display),
        classNamesResolver('xxl_', xxl?.display),
        classNamesResolver('xl_', xl?.display),
        classNamesResolver('lg_', lg?.display),
        classNamesResolver('md_', md?.display),
        classNamesResolver('sm_', sm?.display),

        classNamesResolver('gtc', cols),
        classNamesResolver('xxl_gtc', xxl?.cols),
        classNamesResolver('xl_gtc', xl?.cols),
        classNamesResolver('lg_gtc', lg?.cols),
        classNamesResolver('md_gtc', md?.cols),
        classNamesResolver('sm_gtc', sm?.cols),

        classNamesResolver('gap', gap),
        classNamesResolver('xxl_gap', xxl?.gap),
        classNamesResolver('xl_gap', xl?.gap),
        classNamesResolver('lg_gap', lg?.gap),
        classNamesResolver('md_gap', md?.gap),
        classNamesResolver('sm_gap', sm?.gap),

        classNamesResolver(textAlign),
        classNamesResolver('xxl_text_', xxl?.textAlign),
        classNamesResolver('xl_text_', xl?.textAlign),
        classNamesResolver('lg_text_', lg?.textAlign),
        classNamesResolver('md_text_', md?.textAlign),
        classNamesResolver('sm_text_', sm?.textAlign)
    )
}

export default classNamesResolver
