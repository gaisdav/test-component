/**
 * TODO:
 * сейчас есть проблема с типографикой
 * если попытаться в верхеуровневом компоненте поменять какой-то из стилей указанных ниже,
 * этого сделать не выйдет, т.к. селекторы используемые нами в этом компоненте
 * будут выше по приоритету, пока можно решить только добавив !important к соответствующему свойству
 * надо найти другое решение
 * Пример
 * const RedCaption = styled(Typography).attrs({ variant: 'caption' })`
 *   color: red;
 * `; - не будет работать
 *
 * const RedCaption = styled(Typography).attrs({ variant: 'caption' })`
 *   color: red !important;
 * `; - будет работать
 */
export declare const Typography: import("styled-components").StyledComponent<import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").TypographyTypeMap<{}, "span">>, import("styled-components").DefaultTheme, {}, never>;
