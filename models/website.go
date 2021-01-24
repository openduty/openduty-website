package models

type Website struct {
	ID     uint   `json:"id" gorm:"primary_key"`
	Url  string `json:"url"`
	Owner string `json:"owner"`
}
