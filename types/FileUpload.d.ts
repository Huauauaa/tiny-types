import type { Component } from 'vue'

export interface IData {
  /**
   * 上传参数可自定义
   */
  [propsName?: string]: any
}

export interface IFile {
  /**
   * 上传文件名
   */
  name: string
  /**
   * 上传进度百分比
   */
  percentage: string
  /**
   * 原始文件信息
   */
  raw: File
  /**
   * 文件大小
   */
  size: number
  /**
   * 上传状态
   */
  status: string
  /**
   * uid
   */
  uid: string
}

export interface IEncryptConfig {
  /**
   * 是否开启设置，默认关闭
   */
  enabled: boolean
  /**
   * 是否加密，默认否
   */
  encrypt: boolean
  /**
   * 水印文字，默认为空
   */
  watermark: string
}

export interface IFileListItem {
  /**
   * 文件名
   */
  name: string
  /**
   * 文件url 例如：'https://xxx.cdn.com/xxx.jpg'
   */
  url: string
}

export interface IHeaders {
  /**
   * 比如等于：'en,zh'
   */
  'Accept-Language'?: string
  /**
   * 比如等于：'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
   */
  Authorization?: string
  /**
   * headers的属性和属性值自定义
   */
  [props: string]: string
}

/**
 * saas为3.14.0版本新增
 */
export type IListType = 'text' | 'picture' | 'picture-card' | 'thumb' | 'saas'

export interface IThumbOption {
  /**
   * 弹窗宽度，默认270
   */
  width: number
  /**
   * 是否显示下载按钮，默认false
   */
  showDownload: boolean
  /**
   * 是否显示删除按钮，布尔false
   */
  showDel: boolean
  /**
   * 文件名超出隐藏显示时是否启用tip，默认false
   */
  showTooltip: boolean
  /**
   * 弹窗列表自定义类名
   */
  popperClass: string
  /**
   * 点击下载按钮执行函数
   */
  downloadFile: (file) => void
  /**
   * 列表结果前 icon ，默认为 'icon-attachment'
   */
  icon: string | Component
}
