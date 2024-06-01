export interface IChartProps {
  afterConfig: () => void
  afterSetOption: () => void
  afterSetOptionOnce: () => void
  animation: object
  axisPointer: object | array
  backgroundColor: object | string
  beforeConfig: () => void
  brush: object | array
  cancelResizeCheck: boolean
  /**
   * 默认值 0
   */
  changeDelay: number
  colorMode: string
  colors: array
  data: object | array
  dataEmpty: boolean
  dataZoom: object | array
  events: object
  extend: object
  geo: object | array
  graphic: object | array
  grid: object | array
  /**
   *  默认值 '400px'
   */
  height: string
  initOptions: object
  /**
   * 默认值 false
   */
  judgeWidth: boolean
  legend: object | array
  legendPosition: string
  /**
   * 默认值 true
   */
  legendVisible: boolean
  loading: boolean
  markArea: object
  markLine: object
  markPoint: object
  notSetUnchange: array
  radar: object
  /**
   * 默认值 200
   */
  resizeDelay: number
  /**
   * 默认值 true
   */
  resizeable: boolean
  series: object | array
  /**
   * 默认值 true
   */
  setOptionOpts: boolean | object
  settings: object
  textStyle: object | array
  theme: object
  themeName: object | string
  timeline: object | array
  title: object | array
  toolbox: object | array
  tooltip: object
  tooltipFormatter: () => void
  /**
   * 默认值 true
   */
  tooltipVisible: boolean
  visualMap: object | array
  /**
   * 默认值 'auto'
   */
  width: string
  /**
   * 默认值 300
   */
  widthChangeDelay: number
  xAxis: object | array
  yAxis: object | array
}

export interface IChartSettings {
  /**
   * 图表类型，可选值' bar '，' histogram '，' line ',' pie '，' ring '，' funnel '，' radar '，' waterfall '
   */
  type: string
}
